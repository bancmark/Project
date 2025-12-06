import {schema} from '../TaskSchema/taskShema.js'

export const taskAdd = async(req, res) =>{
    try{
        const data = req.body // taken data from body
        const Adder = await schema.create(data)
        res.send(Adder)
        console.log("data added sucessfully");
    }
    catch(err){
        res.send(err)
    }
}

export const see = async(req, res) =>{
    try{
        const Uid = req.params.id
        let Sid = {}
        if (Uid.length === 24 && /^[a-fA-F0-9]+$/.test(Uid)){
            Sid = {_id: Uid}
        }
        else{
            Sid = {id: Uid}
        }
        const Finder = await schema.find(Sid)
        res.send(Finder)
        console.log("Id find sucessfully");
    }
    catch(err){
        res.send(err)
    }
}