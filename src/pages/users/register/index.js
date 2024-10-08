import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";
import Swal from "sweetalert2"; // Import sweetalert2

const Register = () => {
  const [nis, setNis] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5001/api/users/register", { nis });

      setMessage(response.data.message);

      // Show SweetAlert after successful registration
      Swal.fire({
        icon: "success",
        title: "Terima kasih telah mendaftar!",
        text: "Silakan verifikasi NIS Anda untuk melanjutkan.",
        confirmButtonText: "Oke",
      }).then(() => {
        // Navigate to the verify page after alert confirmation
        router.push("/users/verify");
      });
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.message || "Terjadi kesalahan saat mendaftar.");
      } else {
        setMessage("Terjadi kesalahan saat mendaftar.");
      }
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-lg max-w-sm w-full p-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Daftar NIS</h1>
        <form onSubmit={handleRegister} className="space-y-4">
          <input
            type="text"
            placeholder="Masukkan NIS"
            value={nis}
            onChange={(e) => setNis(e.target.value)}
            className="w-full px-4 py-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            required
          />
          <p className="text-center text-gray-600">
            Sudah Terdaftar?{" "}
            <Link href="/users/verify" className="text-blue-500 hover:underline">
              Login
            </Link>
          </p>
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition duration-300 transform hover:scale-105"
          >
            Daftar
          </button>
        </form>
        {message && (
          <p className="mt-4 text-center text-sm text-red-600">{message}</p>
        )}
      </div>
    </div>
  );
};

export default Register;
