'use client'
import Image from "next/image";
import { useRouter } from "next/navigation";



export default function Home() {
  const route = useRouter()
  return (
   <>
      <div className="flex justify-between items-center mx-10 mt-5 mb-10 sm:flex-row flex-col text-center gap-4">
        <h1 className="text-[32px] font-bold text-[#2563EB]">Welcome! to Morent Car Rental Service</h1>
        <button onClick={()=>route.push('/admin')} className="bg-[#2563EB] px-4 py-2 rounded-lg text-white">Dashboard Login</button>
      </div>
      <div className="animate-rotate3d flex justify-center items-center">
        <Image src={'/morent.png'} alt="logo" width={500} height={500}/>
      </div>
   </>
  );
}
