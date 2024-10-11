import Image from "next/image";
import Link from "next/link";

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
          <h1 className="text-center text-4xl font-bold text-[#8B2E2E] mb-12">
            DAFTAR UNTUK PEMILIHAN
          </h1>{" "}
          {/* Changed max-w-2xl to max-w-xl */}
          <div className="max-w-2xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Student Card */}
            {/* <div className="bg-white rounded-3xl shadow-lg relative overflow-hidden">
              <div className=" rounded-2xl">
                <Image
                  src="/Group 67.png"
                  alt="Siswa Illustration"
                  width={400}
                  height={300}
                  className="w-full h-auto"
                />
                <h2 className="text-center text-xl font-bold text-[#8B2E2E] relative top-[-15px] ">
                  <span className="bg-gray-200 px-2 rounded-md "> SISWA </span>
                </h2>
              </div>
              <div className="bg-gray-200 relative top-[-1px] rounded-2xl ">
                <p className="text-center text-gray-600 mb-6">
                  Daftar Sebagai Siswa Untuk Mengikuti Pemilihan.
                </p>
                <Link
                  href="/users/register"
                  className="block w-[200px] bg-[#8B2E2E] text-white text-center py-3 rounded-md font-normal hover:bg-[#702525] transition-colors"
                >
                  Daftar Sebagai Siswa
                </Link>
              </div>
            </div> */}
            <div className="bg-white rounded-3xl shadow-lg relative overflow-hidden">
              <div className="rounded-2xl">
                <Image
                  src="/Group 67.png"
                  alt="Siswa Illustration"
                  width={400}
                  height={300}
                  className="w-full h-auto"
                />
                <h2 className="text-center text-xl font-bold text-[#8B2E2E] relative top-[-15px]">
                  <span className="bg-gray-200 px-2 rounded-md">SISWA</span>
                </h2>
              </div>
              <div className="bg-gray-200 relative top-[-9px] rounded-2xl mx-5 my-2">
                <p className="text-center text-[#8B2E2E] mb-6 font-semibold text-[16px] p-1 ">
                  Daftar Sebagai Siswa Untuk Mengikuti Pemilihan.
                </p>
                <Link
                  href="/users/register"
                  className="block w-[200px] mx-auto bg-[#8B2E2E] text-white text-center py-2 rounded-md font-normal hover:bg-[#702525] transition-colors relative bottom-5"
                >
                  Daftar Sebagai Siswa
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-lg relative overflow-hidden">
              <div className="rounded-2xl">
                <Image
                  src="/Group 68.png"
                  alt="Siswa Illustration"
                  width={400}
                  height={300}
                  className="w-full h-auto"
                />
                <h2 className="text-center text-xl font-bold text-[#0A3854] relative top-[-15px]">
                  <span className="bg-gray-200 px-2 rounded-md">GURU</span>
                </h2>
              </div>
              <div className="bg-gray-200 relative top-[-10px] rounded-2xl mx-5 my-2 ">
                <p className="text-center text-[#0A3854] mb-6 font-semibold text-[16px] p-1 ">
                  Daftar Sebagai Guru Untuk Mengikuti Pemilihan.
                </p>
                <Link
                  href="/guru/register"
                  className="block w-[200px] mx-auto bg-[#0A3854] text-white text-center py-2 rounded-md font-normal hover:bg-[#072a40] transition-colors relative bottom-5"
                >
                  Daftar Sebagai Guru
                </Link>
              </div>
            </div>

            {/* Teacher Card */}
            {/* <div className="bg-white rounded-3xl shadow-lg p-6 relative overflow-hidden">
              <div className="bg-gradient-to-br rounded-2xl ">
                <Image
                  src="/Group 68.png"
                  alt="Guru Illustration"
                  width={400}
                  height={300}
                  className="w-full h-auto"
                />
                <h2 className="text-center text-xl font-bold text-[#0A3854] relative top-[-15px] ">
                  <span className="bg-gray-200 px-2 rounded-md "> GURU </span>
                </h2>
              </div>
              <div className="bg-gray-200 relative top-[-60px] ">
                <p className="text-center text-gray-600 mb-2">
                  Daftar Sebagai Guru Untuk Mengikuti Pemilihan.
                </p>
                <Link
                  href="/guru/register"
                  className="block w-full bg-[#0A3854] text-white text-center py-3 rounded-full font-bold hover:bg-[#072a40] transition-colors"
                >
                  Daftar Sebagai Guru
                </Link>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </main>
  );
}
