import Image from "next/image";
import BGimage from "@/public/vector-removebg-preview.png"

export default function Home() {
  return (
    <>
      <div className="justify-center items-center my-16">

        <h1 className="text-white text-4xl font-bold text-center">Features</h1>

        <div className="flex text-white p-3 my-10">

          <div className="w-1/3 m-3 pr-2 border-r border-white cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out">
            <h2 className="text-3xl">Fastes</h2>
            <p>Link that save time. That connect people. With lightning-fast performance, easy link management, and reliable tracking, it makes sharing links simple for creators, businesses, and everyday users. Whether for social media, marketing, or personal use, Hypelink saves time and keeps your links professional.</p>
          </div>

          <div className="w-1/3 m-3 border-r pr-2 border-white cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out">
            <h2 className="text-3xl">Reliabilty</h2>
            <p>HypeLink is built for reliability, ensuring your shortened links stay active, secure, and accessible anytime. With stable performance and dependable uptime, users can share links confidently without worrying about broken redirects or slow loading speeds. It provides a smooth and trustworthy experience for both personal and professional use.</p>
          </div>

          <div className="w-1/3 m-3 cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out">
            <h2 className="text-3xl">No Login</h2>
            <p>HypeLink makes link shortening quick and hassle-free with no mandatory login required. Users can instantly create short links without creating an account, making the process faster and more convenient. Whether you need a quick share or regular use, the platform provides a smooth experience with maximum accessibility.</p>
          </div>

        </div>

        <div className="flex justify-center items-center">
          <Image src={BGimage} alt="" width={600} height={600} className="rounded-2xl" />
        </div>

        <div className="flex justify-center items-center pb-10">
          <h1 className="text-white text-4xl font-bold text-center"> We Believe!</h1>
        </div>

      </div>
    </>
  );
}
