import Image from "next/image";
import img1 from '@/public/img1.webp'
import img2 from '@/public/img2.webp'
import img3 from '@/public/img3.webp'
import img4 from '@/public/img4.webp'
import "@/app/globals.css"
import { Volkhov } from "next/font/google";

export default function Home() {
  return (
    <div>
      <div className="bg-[#d2e823] min-h-[120vh] flex">
        <div className="w-1/2 ml-20 mt-60 max-w-xl">
          <div className="">
            <h1 className="text-[#254f1a] text-7xl font-black ">A link in bio built for you.</h1>
            <p className="text-[#354f1a] mt-3 font-semibold">Join 70M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles</p>
          </div>
          <div className="flex">
            <input type="text" className="bg-white text-black p-4 rounded-2xl mt-9 outline-none" />
            <button className="px-9 py-4 mt-9 bg-[#254f1a] rounded-full ml-2 font-semibold hover:cursor-pointer">Get started for free</button>
          </div>
        </div>

        <div className="w-1/2 h-screen overflow-hidden">
          <div className="animate-scroll-up">
            <Image src={img1} alt="" className="h-[80vh] w-[80vh] rounded-2xl mb-6" />
            <Image src={img2} alt="" className="h-[80vh] w-[80vh] rounded-2xl mb-6" />
            <Image src={img3} alt="" className="h-[80vh] w-[80vh] rounded-2xl mb-6" />
            <Image src={img4} alt="" className="h-[80vh] w-[80vh] rounded-2xl mb-6" />

            {/* Duplicate for seamless loop */}
            <Image src={img1} alt="" className="h-[80vh] w-[80vh] rounded-2xl mb-6" />
            <Image src={img2} alt="" className="h-[80vh] w-[80vh] rounded-2xl mb-6" />
            <Image src={img3} alt="" className="h-[80vh] w-[80vh] rounded-2xl mb-6" />
            <Image src={img4} alt="" className="h-[80vh] w-[80vh] rounded-2xl mb-6" />
          </div>

          {/* <Image src={img1}
            alt=""
            height={800}
            width={800}
            className="h-[80vh] w-[80vh] mt-30 ml-15 rounded-2xl" />
          <Image src={img2}
            alt=""
            height={800}
            width={800}
            className="h-[80vh] w-[80vh] mt-30 ml-15 rounded-2xl" />
          <Image src={img3}
            alt=""
            height={800}
            width={800}
            className="h-[80vh] w-[80vh] mt-30 ml-15 rounded-2xl" />
          <Image src={img4}
            alt=""
            height={800}
            width={800}
            className="h-[80vh] w-[80vh] mt-30 ml-15 rounded-2xl" /> */}
        </div>
      </div>

      <div className="bg-[#2665d6] min-h-[100vh]"></div>
      <div className="bg-[#780016] min-h-[100vh]"></div>
      <div className="bg-[#e8efd6] min-h-[100vh]"></div>
      <div className="bg-[#f3f3f1] min-h-[150vh]"></div>
      <div className="bg-[#780016] min-h-[100vh]"></div>
      <div className="bg-[#502274] min-h-[100vh]"></div>
    </div>
  );
}
