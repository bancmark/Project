// app/dashboard/page.js
import { auth } from "@/auth"
import { redirect } from "next/navigation"
import Image from "next/image";
import addition from '@/public/addition.png'


export default async function Dashboard() {
    const session = await auth()

    if (!session) redirect("/")

    return (
        <div className="bg-white flex">
            <aside className="w-1/4 bg-white min-h-screen text-black m-5 ml-5">
                <h1>{session.user?.name}</h1>
                <div className=" mt-3">
                    <div className="flex">
                        <Image
                            src={addition}
                            alt="additon"
                            height={20}
                            width={20}
                        />
                        <p>My Linktree </p>
                    </div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </aside>
            <div></div>
        </div>
    )
}