// // pages/index.js
// import Link from "next/link";

// export default function Home() {
//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 px-4">
//         {/* Card untuk Siswa */}
//         <div className="relative flex flex-col items-center justify-center p-8 bg-white rounded-xl shadow-lg transform transition-transform duration-500 hover:scale-105">
//           <div className="mb-4 w-16 h-16 bg-blue-500 text-white flex items-center justify-center rounded-full">
//             {/* Ikon Siswa */}
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 12c2.28 0 4-1.7 4-4s-1.72-4-4-4-4 1.7-4 4 1.72 4 4 4zM7 14c-1.9 0-3 1.28-3 2.67V18h14v-1.33C17 15.28 15.9 14 14 14H7z" />
//             </svg>
//           </div>
//           <h2 className="mb-4 text-2xl font-bold text-gray-800">Siswa</h2>
//           <p className="mb-4 text-gray-600 text-center">
//             Daftar sebagai siswa untuk mengikuti pemilihan.
//           </p>
//           <Link href="/users/register">
//             <div className="px-5 py-3 font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300">
//               Daftar sebagai Siswa
//             </div>
//           </Link>
//         </div>

//         {/* Card untuk Guru */}
//         <div className="relative flex flex-col items-center justify-center p-8 bg-white rounded-xl shadow-lg transform transition-transform duration-500 hover:scale-105">
//           <div className="mb-4 w-16 h-16 bg-teal-500 text-white flex items-center justify-center rounded-full">
//             {/* Ikon Guru */}
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 12c2.28 0 4-1.7 4-4s-1.72-4-4-4-4 1.7-4 4 1.72 4 4 4zM7 14c-1.9 0-3 1.28-3 2.67V18h14v-1.33C17 15.28 15.9 14 14 14H7z" />
//             </svg>
//           </div>
//           <h2 className="mb-4 text-2xl font-bold text-gray-800">Guru</h2>
//           <p className="mb-4 text-gray-600 text-center">
//             Daftar sebagai guru untuk memantau pemilihan.
//           </p>
//           <Link href="/guru/register">
//             <div className="px-5 py-3 font-semibold text-white bg-teal-600 rounded-lg shadow-md hover:bg-teal-700 transition-colors duration-300">
//               Daftar sebagai Guru
//             </div>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }


import Image from 'next/image'
import Link from 'next/link'

// Define image arrays and configurations
const logoImages = [
  { src: "/image 2.png", alt: "SMKN 1 Banjar Logo", width: 90, height: 90 },
  { src: "/Osis-removebg-preview 3.png", alt: "OSIS Logo", width: 150, height: 150 }
]

const decorativeImages = [
  // Top section
  { src: "/Group 4.png", position: "absolute top-0 left-0", width: 230, height: 230 },
  { src: "/Group 65.png", position: "absolute top-[50px] left-[450px]", width: 100, height: 100 },
  { src: "/Group 57.png", position: "absolute top-[20px] right-[350px]", width: 180, height: 180 },
  { src: "/Group 41.png", position: "absolute right-0 top-[40%] transform -translate-y-1/2", width: 50, height: 50 },
  { src: "/Group 2.png", position: "absolute top-[-5px] right-20", width: 200, height: 200 },
  
  // Bottom section
  { src: "/Group 2.png", position: "absolute bottom-0 left-20", width: 200, height: 200 },
  { src: "/Group 41.png", position: "absolute left-0 top-[60%] transform -translate-y-1/2", width: 50, height: 50 },
  { src: "/Group 57.png", position: "absolute bottom-10 left-[350px]", width: 180, height: 180 },
  { src: "/Group 63.png", position: "absolute bottom-10 right-[350px]", width: 100, height: 100 },
  { src: "/Group 2.png", position: "absolute bottom-0 right-0", width: 280, height: 280 }
]

export default function Home() {
  return (
    <main className="min-h-screen bg-white relative overflow-hidden">
      {/* Render decorative shapes */}
      {decorativeImages.map((image, index) => (
        <div key={`decorative-${index}`} className={image.position}>
          <Image 
            src={image.src}
            alt="Decorative shapes"
            width={image.width}
            height={image.height}
            className="object-contain"
          />
        </div>
      ))}

      {/* Main content */}
      <div className="container mx-auto px-4 py-12 relative z-10 mt-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logos */}
          <div className="flex justify-center items-center gap-8 mb-10">
            {logoImages.map((logo, index) => (
              <Image 
                key={`logo-${index}`}
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="object-contain"
              />
            ))}
          </div>

          {/* Title and subtitle */}
          <h1 className="text-[#8B2E2E] text-2xl md:text-5xl font-bold mb-4">
            PEMILIHAN KETUA OSIS SMKN 1 BANJAR
          </h1>
          <h2 className="text-[#8B2E2E] text-xl md:text-4xl font-bold mb-8">
            PERIODE 2024 - 2025
          </h2>
          <p className="text-gray-600 text-lg mb-12">
            Website Pemilihan Ketua Osis SMKN 1 Banjar<br />
            Secara Digital
          </p>

          {/* Start button */}
          <Link 
            href="/opsi" 
            className="inline-block bg-[#8B2E2E] text-white font-bold py-2 px-8 rounded-full text-md hover:bg-[#702525] transition-colors"
          >
            START
          </Link>
        </div>
      </div>
    </main>
  )
}