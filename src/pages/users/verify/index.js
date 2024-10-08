import { useState } from "react";
import axios from "axios";
import Router from "next/router";
import Swal from "sweetalert2"; // Import SweetAlert2

const Verify = () => {
  const [nis, setNis] = useState("");

  const handleVerify = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5001/api/users/verify", { nis });

      // Jika NIS valid dan belum melakukan vote
      if (response.data.message === "NIS valid dan Anda dapat melakukan vote.") {
        Swal.fire({
          title: "Verifikasi Berhasil!",
          text: "NIS valid dan Anda dapat melakukan vote.",
          icon: "success",
          confirmButtonText: "Lanjutkan",
        }).then(() => {
          // Simpan NIS ke localStorage
          localStorage.setItem("nis", nis);

          // Arahkan ke halaman vote
          Router.push("/users/vote");
        });
      }
    } catch (error) {
      // Handle jika NIS tidak ditemukan atau user sudah melakukan vote
      if (error.response) {
        if (error.response.status === 404) {
          Swal.fire({
            title: "NIS Tidak Ditemukan",
            text: "NIS tidak ditemukan. Silakan mendaftarkan NIS Anda terlebih dahulu.",
            icon: "error",
            confirmButtonText: "OK",
          });
        } else if (error.response.status === 400) {
          Swal.fire({
            title: "Sudah Melakukan Vote",
            text: "Anda sudah melakukan vote.",
            icon: "warning",
            confirmButtonText: "OK",
          });
        } else {
          Swal.fire({
            title: "Terjadi Kesalahan",
            text: error.response.data.message || "Terjadi kesalahan saat memverifikasi NIS.",
            icon: "error",
            confirmButtonText: "OK",
          });
        }
      } else {
        Swal.fire({
          title: "Terjadi Kesalahan",
          text: "Terjadi kesalahan saat memverifikasi NIS.",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-lg max-w-md w-full p-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Verifikasi NIS</h1>
        <form onSubmit={handleVerify} className="space-y-4">
          <input
            type="text"
            placeholder="Masukkan NIS"  
            value={nis}
            onChange={(e) => setNis(e.target.value)}
            className="w-full px-4 py-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            required
          />
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition duration-300 transform hover:scale-105"
          >
            Verifikasi
          </button>
        </form>
      </div>
    </div>
  );
};

export default Verify;
