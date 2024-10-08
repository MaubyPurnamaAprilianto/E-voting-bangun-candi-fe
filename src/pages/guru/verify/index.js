import { useState } from "react";
import axios from "axios";
import Router from "next/router";
import Swal from "sweetalert2"; // Import SweetAlert2

const Verify = () => {
  const [nik, setNik] = useState("");

  const handleVerify = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5001/api/teachers/verify", { nik });

      // Jika NIk valid dan belum melakukan vote
      if (response.data.message === "NIK valid dan Anda dapat melakukan vote.") {
        Swal.fire({
          title: "Verifikasi Berhasil!",
          text: "NIK valid dan Anda dapat melakukan vote.",
          icon: "success",
          confirmButtonText: "Lanjutkan",
        }).then(() => {
          // Simpan NIk ke localStorage
          localStorage.setItem("nik", nik);

          // Arahkan ke halaman vote
          Router.push("/guru/vote");
        });
      }
    } catch (error) {
      // Handle jika NIk tidak ditemukan atau user sudah melakukan vote
      if (error.response) {
        if (error.response.status === 404) {
          Swal.fire({
            title: "NIK Tidak Ditemukan",
            text: "NIK tidak ditemukan. Silakan mendaftarkan NIK Anda terlebih dahulu.",
            icon: "error",
            confirmButtonText: "OK",
          }).then(() => {
            // Arahkan ke halaman daftar
            Router.push("/guru/register");
          })
        } else if (error.response.status === 400) {
          Swal.fire({
            title: "Sudah Melakukan Vote",
            text: "Anda sudah melakukan vote.",
            icon: "warning",
            confirmButtonText: "OK",
          }).then(() => {
            // Arahkan ke halaman verify
            Router.push("/guru/verify");
          })
        } else {
          Swal.fire({
            title: "Terjadi Kesalahan",
            text: error.response.data.message || "Terjadi kesalahan saat memverifikasi NIK.",
            icon: "error",
            confirmButtonText: "OK",
          });
        }
      } else {
        Swal.fire({
          title: "Terjadi Kesalahan",
          text: "Terjadi kesalahan saat memverifikasi NIK.",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    }
  };

  return (
    <div className="bg-white min-h-screen flex items-center justify-center">
      <div className="container mx-auto mt-10 text-black">
        <h1 className="text-3xl font-bold text-center">Verifikasi NIK</h1>
        <form onSubmit={handleVerify} className="mt-4 max-w-sm mx-auto flex justify-center">
          <input
            type="text"
            placeholder="Masukkan NIK"
            value={nik}
            onChange={(e) => setNik(e.target.value)}
            className="border border-gray-300 p-2 rounded w-full"
            required
          />
          <button type="submit" className="bg-blue-500 text-white p-2 rounded ml-2">
            Verifikasi
          </button>
        </form>
      </div>
    </div>
  );
};

export default Verify;
