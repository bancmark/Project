import connection from "@/lib/mongoose.js"
import User from "@/model/user.js"


export async function POST(request) {
    await connection()
    const body = await request.json()

    // url is exit or nor
    const doc = await User.findOne({shorturl: body.shorturl})
    if(doc){
        return Response.json({
        success: false,
        message:"URl already exit"
    })
    }

    //inserting datr
    const user = await User.create({
        url: body.url,
        shorturl: body.shorturl
    })

    return Response.json({
        success: true,
        user,
    })
}