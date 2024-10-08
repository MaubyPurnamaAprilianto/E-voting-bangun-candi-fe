import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";
import Swal from "sweetalert2"; // Import sweetalert2

const Register = () => {
  const [nik, setNik] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      console.log("Sending NIK:", nik);
      const response = await axios.post("http://localhost:5001/api/teachers/register", { nik });

      console.log("Response Data:", response.data);
      setMessage(response.data.message);

      // Show SweetAlert after successful registration
      Swal.fire({
        icon: "success",
        title: "Terima kasih telah mendaftar!",
        text: "Silakan verifikasi NIK Anda untuk melanjutkan.",
        confirmButtonText: "Oke",
      }).then(() => {
        // Navigate to the verify page after alert confirmation
        router.push("/guru/verify");
      });
    } catch (error) {
      if (error.response) {
        console.error("Error during registration:", error.response.data);
        setMessage(error.response.data.message || "Terjadi kesalahan saat mendaftar.");
      } else {
        console.error("Error during registration:", error.message);
        setMessage("Terjadi kesalahan saat mendaftar.");
      }
    }
  };

  return (
    <div className="bg-white min-h-screen flex items-center justify-center">
      <div className="container mx-auto mt-10 text-black">
        <h1 className="text-3xl font-bold text-center">Register NIK</h1>
        <form onSubmit={handleRegister} className="mt-4 max-w-sm mx-auto">
          <input
            type="text"
            placeholder="Masukkan NIk"
            value={nik}
            onChange={(e) => setNik(e.target.value)}
            className="border border-gray-300 p-2 rounded w-full"
            required
          />
          <p>
            Apakah Sudah Terdaftar?
            <span className="text-blue-500">
              <Link href="/users/verify"> Login</Link>
            </span>
          </p>
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded mt-2 w-full"
          >
            Daftar
          </button>
        </form>
        {message && <p className="mt-2 text-center">{message}</p>}
      </div>
    </div>
  );
};

export default Register;
