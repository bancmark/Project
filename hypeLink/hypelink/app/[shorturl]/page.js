import connection from "@/lib/mongoose";
import User from "@/model/user.js"
import { redirect } from "next/navigation";


//this is for dynamic routing
export default async function page({ params }) {
    await connection()

    const {shorturl} = await params

    const doc = await User.findOne({
        shorturl
    })

    if (!doc) {
        return <h1>URL not found</h1>
    }

    redirect(doc.url)
}