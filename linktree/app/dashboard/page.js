// app/dashboard/page.js
import { auth } from "@/auth"
import { redirect } from "next/navigation"
import Image from "next/image";
import addition from '@/public/addition.png'
import coin from '@/public/coins.png'


export default async function Dashboard() {
    const session = await auth()

    if (!session) redirect("/")

    return (
        <div className="bg-white flex">
            <aside className="w-1/5 bg-white min-h-screen text-black m-5 ml-5">
                <h1>{session.user?.name}</h1>
                <div className=" mt-3 space-y-3">
                    <div className="flex gap-3 p-1 items-center hover:cursor-pointer hover:bg-gray-400 rounded-xl">
                        <Image
                            src={addition}
                            alt="additon"
                            height={5}
                            width={15}
                            className="w-4 h-4"
                        />
                        <p>My Linktree </p>
                    </div>
                    <div className="flex gap-3 p-1 items-center hover:bg-gray-400 hover:cursor-pointer rounded-xl">
                        <Image
                        src={coin}
                        alt="coin"
                        height={5}
                        width={15}
                        className="w-4 h-4"
                        />
                        <p>Earn</p>
                    </div>
                    <div></div>
                    <div></div>
                </div>
            </aside>
            <div></div>
        </div>
    )
}