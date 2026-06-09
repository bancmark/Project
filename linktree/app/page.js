import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="bg-[#d2e823] min-h-[120vh] flex">
        <div className="w-1/2 ml-20 mt-60 max-w-xl">
          <div className="">
            <h1 className="text-[#254f1a] text-7xl font-black ">A link in bio built for you.</h1>
            <p className="text-[#354f1a] mt-3 font-semibold">Join 70M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles</p>
          </div>
          <div className="felx">
            <input type="text" className="bg-white text-black p-4 rounded-2xl mt-9 outline-none" />
            <button className="p-5 px-9 bg-[#254f1a] rounded-full ml-2 font-semibold hover:cursor-pointer">Get started for free</button>
          </div>
        </div>

        <div className="w-1/2"></div>
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
