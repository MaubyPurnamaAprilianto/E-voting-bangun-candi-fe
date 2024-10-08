import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Swal from "sweetalert2"; // Import SweetAlert2

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading state

    try {
      const response = await axios.post("http://localhost:5001/api/auth/login", { email, password });
      
      // Save token to local storage or handle authentication state
      localStorage.setItem("token", response.data.token); // Assuming the token is returned from the server

      // Redirect to the desired page after successful login
      router.push("/admin/dashboard"); // Ganti dengan halaman yang sesuai setelah login

    } catch (error) {
      console.error("Login error:", error);
      Swal.fire({
        title: "Login Gagal",
        text: error.response?.data.message || "Terjadi kesalahan saat login.",
        icon: "error",
        confirmButtonText: "OK",
      });
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="container mx-auto p-6 rounded-lg shadow-lg bg-white text-black max-w-sm">
        <h1 className="text-3xl font-bold text-center mb-6">Login</h1>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring focus:ring-indigo-500"
              placeholder="Masukkan email"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring focus:ring-indigo-500"
              placeholder="Masukkan password"
            />
          </div>
          <button
            type="submit"
            className={`w-full bg-indigo-600 text-white p-2 rounded-md transition-colors duration-300 ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
            disabled={loading}
          >
            {loading ? "Memuat..." : "Login"}
          </button>
        </form>
        <p className="mt-4 text-center text-sm">
          Belum punya akun?{" "}
          <a href="/users/register" className="text-indigo-600 hover:underline">
            Daftar
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
