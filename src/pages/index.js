// pages/index.js
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 px-4">
        {/* Card untuk Siswa */}
        <div className="relative flex flex-col items-center justify-center p-8 bg-white rounded-xl shadow-lg transform transition-transform duration-500 hover:scale-105">
          <div className="mb-4 w-16 h-16 bg-blue-500 text-white flex items-center justify-center rounded-full">
            {/* Ikon Siswa */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 12c2.28 0 4-1.7 4-4s-1.72-4-4-4-4 1.7-4 4 1.72 4 4 4zM7 14c-1.9 0-3 1.28-3 2.67V18h14v-1.33C17 15.28 15.9 14 14 14H7z" />
            </svg>
          </div>
          <h2 className="mb-4 text-2xl font-bold text-gray-800">Siswa</h2>
          <p className="mb-4 text-gray-600 text-center">
            Daftar sebagai siswa untuk mengikuti pemilihan.
          </p>
          <Link href="/users/register">
            <div className="px-5 py-3 font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300">
              Daftar sebagai Siswa
            </div>
          </Link>
        </div>

        {/* Card untuk Guru */}
        <div className="relative flex flex-col items-center justify-center p-8 bg-white rounded-xl shadow-lg transform transition-transform duration-500 hover:scale-105">
          <div className="mb-4 w-16 h-16 bg-teal-500 text-white flex items-center justify-center rounded-full">
            {/* Ikon Guru */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 12c2.28 0 4-1.7 4-4s-1.72-4-4-4-4 1.7-4 4 1.72 4 4 4zM7 14c-1.9 0-3 1.28-3 2.67V18h14v-1.33C17 15.28 15.9 14 14 14H7z" />
            </svg>
          </div>
          <h2 className="mb-4 text-2xl font-bold text-gray-800">Guru</h2>
          <p className="mb-4 text-gray-600 text-center">
            Daftar sebagai guru untuk memantau pemilihan.
          </p>
          <Link href="/guru/register">
            <div className="px-5 py-3 font-semibold text-white bg-teal-600 rounded-lg shadow-md hover:bg-teal-700 transition-colors duration-300">
              Daftar sebagai Guru
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
