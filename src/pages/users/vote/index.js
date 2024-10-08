import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import Swal from "sweetalert2"; // Import SweetAlert2

const Vote = () => {
  const [candidates, setCandidates] = useState([]);
  const [message, setMessage] = useState("");
  const router = useRouter();

  

  useEffect(() => {
    const nis = localStorage.getItem("nis");

    if (!nis) {
      router.push("/users/verify"); // Redirect to login if token is not found
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
  }, []);

  const handleVote = async (candidateId) => {
    try {
      // Ambil nis dari localStorage di dalam handleVote
      const nis = localStorage.getItem("nis");
  
      if (!nis) {
        // Jika nis tidak ditemukan, beri pesan error atau redirect ke halaman login
        Swal.fire({
          title: "Error",
          text: "NIS tidak ditemukan, silakan login kembali.",
          icon: "error",
          confirmButtonText: "OK",
        });
        return;
      }
  
      const response = await axios.post("http://localhost:5001/api/users/vote", {
        nis, // Gunakan NIS yang sudah diambil dari localStorage
        candidateId,
      });
  
      // SweetAlert ketika voting berhasil
      Swal.fire({
        title: "Terima Kasih Telah Memilih!",
        text: response.data.message || "Voting Pilketos Anda telah berhasil.",
        icon: "success",
        confirmButtonText: "OK",
      }).then(() => {
        // Hapus NIS dari localStorage
        localStorage.removeItem("nis");
  
        // Redirect ke halaman yang sesuai setelah voting
        router.push("/users/verify");
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
