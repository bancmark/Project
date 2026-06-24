// app/dashboard/page.js
import { auth } from "@/auth"
import { redirect } from "next/navigation"

export default async function Dashboard() {
    const session = await auth()

    if (!session) redirect("/")

    return(
        <div className="bg-white">
            <div></div>
            <div></div>
            <h1>Welcome, {session.user?.name}</h1>
        </div>
    )
}