import Image from "next/image";
import img1 from '@/public/img1.webp'
import img2 from '@/public/img2.webp'
import img3 from '@/public/img3.webp'
import img4 from '@/public/img4.webp'
import analyze from '@/public/analyze.avif'
import "./globals.css"
import Link from "next/link";
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

        <div className="w-1/2 h-[120vh] overflow-hidden">
          <div className="animate-scroll-up">
            <Image src={img1} alt="" className="h-[80vh] w-[80vh] rounded-2xl mb-2" />
            <Image src={img2} alt="" className="h-[80vh] w-[80vh] rounded-2xl mb-2" />
            <Image src={img3} alt="" className="h-[80vh] w-[80vh] rounded-2xl mb-2" />
            <Image src={img4} alt="" className="h-[80vh] w-[80vh] rounded-2xl mb-2" />

            {/* Duplicate for seamless loop */}
            <Image src={img1} alt="" className="h-[80vh] w-[80vh] rounded-2xl mb-2" />
            <Image src={img2} alt="" className="h-[80vh] w-[80vh] rounded-2xl mb-2" />
            <Image src={img3} alt="" className="h-[80vh] w-[80vh] rounded-2xl mb-2" />
            <Image src={img4} alt="" className="h-[80vh] w-[80vh] rounded-2xl mb-2" />
          </div>
        </div>
      </div>

      <div className="bg-[#2665d6] min-h-[120vh] flex">
        <div className="w-1/2 mt-20">
          <video autoPlay muted loop className="w-full h-screen object-cover">
            <source src="/customise_your_linktree.webm" type="video/webm" />
          </video>
        </div>

        <div className="w-1/2 mt-40 mr-20">
          <h1 className="text-[#d2e823] text-7xl mb-9 font-black">Create and customize your Linktree in minutes</h1>
          <p className="mt-3 font-semibold mb-6">Connect all your content across social media, websites, stores and more in one link in bio. Customize every detail or let Linktree automatically enhance it to match your brand and drive more clicks.</p>
          <button className="bg-[#d2e823] text-black font-semibold mt-3 hover:mt-2.5 p-5 px-20 rounded-full hover:cursor-pointer">Get started for free</button>
        </div>
      </div>

      <div className="bg-[#780016] min-h-[120vh] flex">
        <div className="w-1/2 ml-17">
          <div className="mt-52  p-0">
            <h1 className="text-[#e9c0e9] text-6xl font-black">Share your linktree anywhere you like!</h1>
            <p className="font-semibold mt-10 text-lg">Add your unique Linktree URL to all the platforms and places you find your audience. Then use your QR code to drive your offline traffic back to your link in bio.</p>
          </div>
          <div>
            <button className="bg-[#e9c0e9] p-4 mt-9 px-15 text-black rounded-full font-bold hover:cursor-pointer hover:mt-8.5">Get started for free</button>
          </div>
        </div>
        <div className="w-1/2"></div>
      </div>

      <div className="bg-[#e8efd6] min-h-[110vh] flex">
        <div className="w-1/2">
          <Image
            src={analyze}
            alt="Analysis image"
            width={700}
            height={700}
          />
        </div>
        <div className="w-1/2 mt-30 m-6">
          <div>
            <h1 className="font-black text-7xl text-black">Analyze your audience and keep them engaged</h1>
            <p className="text-black text-xl mt-5">Track your engagement over time, monitor revenue and learn what’s converting your audience. Make informed updates on the fly to keep them coming back.</p>
          </div>
          <div>
            <button className="px-15 p-4 bg-[#e9c0e9] text-black font-semibold rounded-full mt-6 hover:cursor-pointer hover:mt-5.5 hover:bg-[#e9c0e9ef]">Get statred for free</button>
          </div>
        </div>
      </div>
      <div className="bg-[#f3f3f1] min-h-[150vh]"></div>
      <div className="bg-[#780016] min-h-[100vh]"></div>
      <div className="bg-[#502274] min-h-[100vh]"></div>
    </div>
  );
}
