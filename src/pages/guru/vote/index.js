import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import Swal from "sweetalert2"; // Import SweetAlert2

const Vote = () => {
  const [candidates, setCandidates] = useState([]);
  const [message, setMessage] = useState("");
  const [nik, setNik] = useState(null); // State to hold nik

  const router = useRouter();

  useEffect(() => {
    const storedNik = localStorage.getItem("nik");

    if (!storedNik) {
      router.push("/guru/verify"); // Redirect to verify if nik is not found
    } else {
      setNik(storedNik); // Set nik in state
    }

    const fetchCandidates = async () => {
      try {
        const response = await axios.get("http://localhost:5001/api/users/candidates");
        setCandidates(response.data);
      } catch (error) {
        console.error("Error fetching candidates:", error);
        setMessage("Terjadi kesalahan saat mengambil daftar kandidat.");
      }
    };
    
    fetchCandidates();
  }, [router]); // Add router as a dependency

  const handleVote = async (candidateId) => {
    try {
      const response = await axios.post("http://localhost:5001/api/teachers/vote", {
        nik, // Now nik is defined in state
        candidateId,
      });

      // SweetAlert ketika voting berhasil
      Swal.fire({
        title: "Terima Kasih Telah Memilih!",
        text: response.data.message || "Voting Pilketos Anda telah berhasil.",
        icon: "success",
        confirmButtonText: "OK",
      }).then(() => {
        // Clear NIk from local storage
        localStorage.removeItem("nik");

        // Redirect to the home page after voting
        router.push("/guru/verify"); // Arahkan ke halaman yang sesuai setelah voting
      });

    } catch (error) {
      console.error(error);

      // SweetAlert ketika terjadi kesalahan
      Swal.fire({
        title: "Kesalahan",
        text: "Terjadi kesalahan saat memberikan suara.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div className="bg-white min-h-screen flex text-black">
      <div className="container mx-auto mt-10">
        <h1 className="text-2xl font-bold text-center">Pilih Kandidat Yang Anda Inginkan</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
          {candidates.map((candidate) => (
            <div key={candidate.id} className="border p-4 rounded flex flex-col items-center w-full">
              <Image src={`/${candidate.photo}`} alt={candidate.name} className="object-cover mb-2 rounded" width={500} height={100} />
              <h2 className="font-bold mb-2">{candidate.name}</h2>
              <button
                onClick={() => handleVote(candidate.id)}
                className="bg-green-500 text-white p-2 rounded w-full"
              >
                Vote
              </button>
            </div>
          ))}
        </div>
        {message && <p className="mt-2 text-center">{message}</p>}
      </div>
    </div>
  );
};

export default Vote;
