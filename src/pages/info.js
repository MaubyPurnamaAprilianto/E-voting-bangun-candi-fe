// import { useState } from "react";

// const decorativeImages = [
//   { src: "/Group 4.png", position: "absolute top-0 left-0" },
//   {
//     src: "/api/placeholder/100/100",
//     position: "absolute top-[50px] left-[450px]",
//   },
//   {
//     src: "/api/placeholder/180/180",
//     position: "absolute top-[20px] right-[350px]",
//   },
//   { src: "/api/placeholder/50/50", position: "absolute right-0 top-[40%]" },
//   { src: "/api/placeholder/200/200", position: "absolute bottom-0 left-20" },
//   { src: "/api/placeholder/50/50", position: "absolute left-0 top-[60%]" },
//   {
//     src: "/api/placeholder/180/180",
//     position: "absolute bottom-10 left-[350px]",
//   },
//   {
//     src: "/api/placeholder/100/100",
//     position: "absolute bottom-10 right-[350px]",
//   },
//   { src: "/api/placeholder/280/280", position: "absolute bottom-0 right-0" },
// ];

// const Register = () => {
//   const [nis, setNis] = useState("");
//   const [message, setMessage] = useState("");

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch("http://localhost:5001/api/users/register", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ nis }),
//       });

//       const data = await response.json();
//       setMessage(data.message);

//       if (response.ok) {
//         alert(
//           "Terima kasih telah mendaftar! Silakan verifikasi NIS Anda untuk melanjutkan."
//         );
//       }
//     } catch (error) {
//       setMessage("Terjadi kesalahan saat mendaftar.");
//     }
//   };

//   return (
//     <main className="min-h-screen bg-white relative overflow-hidden">
//       {/* Decorative shapes */}
//       {decorativeImages.map((image, index) => (
//         <div key={`decorative-${index}`} className={image.position}>
//           <img
//             src={image.src}
//             alt="Decorative shapes"
//             className="object-contain"
//           />
//         </div>
//       ))}

//       {/* Main content */}
//       <div className="container mx-auto px-4 py-8 relative z-10">
//         <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-lg p-6">
//           <h1 className="text-[#8B2E2E] text-2xl font-bold text-center mb-4">
//             DAFTAR NIS
//           </h1>

//           <div className="mb-6">
//             <h2 className="text-[#8B2E2E] text-lg font-semibold text-center mb-3">
//               Pemilihan Ketua Osis Periode 2024-2025
//             </h2>

//             {/* Student Illustration and Logos - Modified Layout */}
//             <div className="flex items-center justify-between mb-4">
//               {/* Left side - Student Illustration */}
//               <div className="w-1/2 pr-4">
//                 <img
//                   src="/Desain tanpa judul 1.png"
//                   alt="Students"
//                   className="w-[280px] h-auto"
//                 />
//               </div>

//               {/* Right side - Logos */}
//               <div className="w-1/2 flex flex-col items-center justify-center relative ">
//                 <div className="flex items-center gap-3">
//                   <img
//                     src="/image 2.png"
//                     alt="SMKN Logo"
//                     className="object-contain w-[80px] h-auto"
//                   />
//                   <span className="text-xl font-bold ml-5 text-gray-600">
//                     X
//                   </span>
//                   <img
//                     src="/Osis-removebg-preview 3.png"
//                     alt="OSIS Logo"
//                     className="object-contain w-[120px] h-auto"
//                   />
//                 </div>
//                 {/* Motto */}
//                 <p className="text-start text-[#8B2E2E] italic text-sm mb-6">
//                   "Pilihan Cerdas untuk OSIS yang Berkualitas, Kuatkan
//                   Kebersamaan, Tingkatkan Kreativitas, dan Wujudkan Sekolah yang
//                   Berprestasi!"
//                 </p>
//               </div>
//             </div>

//             {/* Registration Form */}
//             <form onSubmit={handleRegister} className="space-y-3">
//               <input
//                 type="text"
//                 placeholder="Masukan NIS"
//                 value={nis}
//                 onChange={(e) => setNis(e.target.value)}
//                 className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B2E2E] transition duration-300"
//                 required
//               />

//               <div className="text-center text-gray-600 text-sm">
//                 Sudah terdaftar?{" "}
//                 <a
//                   href="/users/verify"
//                   className="text-[#0A3854] hover:underline"
//                 >
//                   Log In
//                 </a>
//               </div>

//               <button
//                 type="submit"
//                 className="w-full py-2 bg-[#8B2E2E] text-white rounded-full font-semibold hover:bg-[#702525] transition duration-300"
//               >
//                 Daftar
//               </button>
//             </form>

//             {message && (
//               <p className="mt-3 text-center text-xs text-red-600">{message}</p>
//             )}
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default Register;


import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const decorativeImages = [
  {
    src: "/Group 4.png",
    position: "absolute top-0 left-[50px]",
    width: 230,
    height: 230,
  },
  {
    src: "/Group 65.png",
    position: "absolute top-[50px] left-[450px]",
    width: 100,
    height: 100,
  },
  {
    src: "/Group 57.png",
    position: "absolute top-[20px] right-[350px]",
    width: 180,
    height: 180,
  },
  {
    src: "/Group 41.png",
    position: "absolute right-0 top-[40%]",
    width: 50,
    height: 50,
  },
  {
    src: "/Group 2.png",
    position: "absolute top-[-5px] right-20",
    width: 200,
    height: 200,
  },
  {
    src: "/Group 2.png",
    position: "absolute bottom-0 left-20",
    width: 200,
    height: 200,
  },
  {
    src: "/Group 41.png",
    position: "absolute left-0 top-[60%]",
    width: 50,
    height: 50,
  },
  {
    src: "/Group 57.png",
    position: "absolute bottom-10 left-[350px]",
    width: 180,
    height: 180,
  },
  {
    src: "/Group 63.png",
    position: "absolute bottom-10 right-[350px]",
    width: 100,
    height: 100,
  },
  {
    src: "/Group 2.png",
    position: "absolute bottom-0 right-[50px]",
    width: 280,
    height: 280,
  },
];

export default function Register() {
  const [nis, setNis] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5001/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nis }),
      });

      const data = await response.json();
      setMessage(data.message);

      if (response.ok) {
        alert(
          "Terima kasih telah mendaftar! Silakan verifikasi NIS Anda untuk melanjutkan."
        );
      }
    } catch (error) {
      setMessage("Terjadi kesalahan saat mendaftar.");
    }
  };

  return (
    <main className="min-h-screen bg-white relative overflow-hidden">
      {/* Decorative shapes */}
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
      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Wrapper for cards with blurred background */}
        <div className="relative bg-white bg-opacity-70 backdrop-blur-sm p-8 rounded-2xl shadow-lg mx-auto max-w-4xl">
        <h1 className="text-[#8B2E2E] text-2xl font-extrabold text-center mb-4">
          DAFTAR NIS
        </h1>
          {/* Changed max-w-2xl to max-w-xl */}
          <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-lg p-2">
            <div className="mb-6">
              <h2 className="text-[#8B2E2E] text-lg font-semibold text-center relative top-10 ">
                Pemilihan Ketua Osis Periode 2024-2025
              </h2>

              {/* Student Illustration and Logos - Modified Layout */}
              <div className="flex items-center justify-between mb-4">
                {/* Left side - Student Illustration */}
                <div className="w-1/2 pr-4">
                  <img
                    src="/Desain tanpa judul 1.png"
                    alt="Students"
                    className="w-[280px] h-auto"
                  />
                </div>

                {/* Right side - Logos */}
                <div className="w-1/2 flex flex-col items-center justify-center relative ">
                  <div className="flex items-center gap-3">
                    <img
                      src="/image 2.png"
                      alt="SMKN Logo"
                      className="object-contain w-[80px] h-auto"
                    />
                    <span className="text-xl font-bold ml-5 text-gray-600">
                      X
                    </span>
                    <img
                      src="/Osis-removebg-preview 3.png"
                      alt="OSIS Logo"
                      className="object-contain w-[120px] h-auto"
                    />
                  </div>
                  {/* Motto */}
                  <p className="text-start text-[#8B2E2E] italic text-sm mb-6">
                    "Pilihan Cerdas untuk OSIS yang Berkualitas, Kuatkan
                    Kebersamaan, Tingkatkan Kreativitas, dan Wujudkan Sekolah
                    yang Berprestasi!"
                  </p>
                </div>
              </div>

              {/* Registration Form */}
              <form onSubmit={handleRegister} className="space-y-3">
                <input
                  type="text"
                  placeholder="Masukan NIS"
                  value={nis}
                  onChange={(e) => setNis(e.target.value)}
                  className="w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B2E2E] transition duration-300"
                  required
                />

                <div className="text-center text-gray-600 text-sm">
                  Sudah terdaftar?{" "}
                  <a
                    href="/users/verify"
                    className="text-[#0ea5e9] hover:underline"
                  >
                    Log In
                  </a>
                </div>

                <button
                  type="submit"
                  className="w-full py-2 bg-[#8B2E2E] text-white rounded-md font-semibold hover:bg-[#702525] transition duration-300"
                >
                  Daftar
                </button>
              </form>

              {message && (
                <p className="mt-3 text-center text-xs text-red-600">
                  {message}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
