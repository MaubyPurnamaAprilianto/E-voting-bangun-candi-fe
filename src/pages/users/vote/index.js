import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Swal from "sweetalert2";

const Vote = () => {
  const [candidates, setCandidates] = useState([]);
  const [message, setMessage] = useState("");
  const [expandedVisiMisi, setExpandedVisiMisi] = useState({});
  const router = useRouter();

  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const response = await axios.get(
          "https://gqk2bgt5-5001.asse.devtunnels.ms/api/users/candidates"
        );
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
      const nis = localStorage.getItem("nis");

      if (!nis) {
        Swal.fire({
          title: "Error",
          text: "NIS tidak ditemukan, silakan login kembali.",
          icon: "error",
          confirmButtonText: "OK",
        });
        return;
      }

      const response = await axios.post(
        "https://gqk2bgt5-5001.asse.devtunnels.ms/api/users/vote",
        {
          nis,
          candidateId,
        }
      );

      Swal.fire({
        title: "Terima Kasih Telah Memilih!",
        text: response.data.message || "Voting Pilketos Anda telah berhasil.",
        icon: "success",
        confirmButtonText: "OK",
      }).then(() => {
        localStorage.removeItem("nis");
        router.push("/users/verify");
      });
    } catch (error) {
      console.error(error);
      Swal.fire({
        title: "Kesalahan",
        text: "Terjadi kesalahan saat memberikan suara.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  const toggleVisiMisi = (candidateId) => {
    setExpandedVisiMisi((prev) => ({
      ...prev,
      [candidateId]: !prev[candidateId],
    }));
  };

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      {/* Header with logos */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <img
            src="/image 2.png"
            alt="Logo Left"
            className="h-auto w-[90px] "
          />
          <div className="text-center">
            <h1 className="text-3xl font-bold text-[#8B1D1D]">
              PILIH KANDIDAT YANG ANDA INGINKAN
            </h1>
            <p className="text-gray-600">
              Pilihanmu akan menentukan Warga Sekolah dan Osis kedepannya
            </p>
          </div>
          <img
            src="/Osis-removebg-preview 3.png"
            alt="Logo Right"
            className="h-auto w-[150px] "
          />
        </div>

        {/* Candidate Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-[90px] mt-8 relative">
          {candidates.map((candidate, index) => (
            <div key={candidate.id} className="relative w-[350px] border border-blue-600 rounded-lg">
              {/* Number Badge */}
              <div className="absolute  left-1/2 transform -translate-x-1/2 -top-6 z-10 w-[100px] text-center ">
                <div className="bg-white rounded-lg px-4 py-2 shadow-md border border-blue-600 ">
                  <span className="text-xl font-bold text-[#8B1D1D]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>

              {/* Candidate Card */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden relative ">
                <div className="relative">
                  {/* Candidate Image */}
                  <div className="h-[365px] bg-gray-200">
                    <img
                      src={`/${candidate.photo}`}
                      alt={candidate.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

               {/* Candidate Info */}
               <div className="p-4">
                <div className="bg-[#8B1D1D] text-white p-2 rounded-t-lg mb-4">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="font-extrabold ">Agus fufa</div>
                      <div className="text-bold">12 PPLG</div>
                    </div>
                    <div>
                      <div className="font-extrabold">Dani yono</div>
                      <div className="text-bold">12 MPLB</div>
                    </div>
                  </div>
                </div>

                  {/* Vision & Mission */}
                  {/* <div className="mb-4">
                    <h3 className="font-bold mb-2 text-[#8B1D1D] ml-2">
                      Visi & Misi:
                    </h3>
                    <div className="text-gray-600 text-sm">
                      <div
                        className={`transition-all duration-300 ${
                          expandedVisiMisi[candidate.id]
                            ? "max-h-[500px]"
                            : "max-h-16"
                        } overflow-hidden`}
                      >
                        <ul className="list-none pl-0 space-y-2 ml-2">
                          <li>
                            {" "}
                            - Membangun sekolah yang lebih baik dan menciptakan
                            lingkungan belajar yang kondusif
                          </li>
                          <li>
                            {" "}
                            - Meningkatkan kualitas pembelajaran dan
                            mengembangkan kegiatan ekstrakurikuler
                          </li>
                          <li>
                            {" "}
                            - Memperkuat kerja sama antara siswa dan guru
                          </li>
                          <li> - Membangun fasilitas pembelajaran modern</li>
                          <li>
                            {" "}
                            - Mengembangkan program-program inovatif untuk
                            kemajuan sekolah
                          </li>
                        </ul>
                      </div>
                      <button
                        onClick={() => toggleVisiMisi(candidate.id)}
                        className="text-blue-500 hover:text-blue-700 focus:outline-none mt-2 ml-2"
                      >
                        {expandedVisiMisi[candidate.id]
                          ? "Sembunyikan"
                          : "Lihat Selengkapnya"}
                      </button>
                    </div>
                  </div> */}

                  {/* Vote Button */}
                  <button
                    onClick={() => handleVote(candidate.id)}
                    className="w-full bg-[#8B1D1D] text-white py-3 rounded-lg font-bold hover:bg-[#7A1919] transition duration-300"
                  >
                    Vote
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {message && (
          <div className="mt-4 text-center text-red-600">{message}</div>
        )}
      </div>
    </div>
  );
};

export default Vote;
