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
        const Uid = req.params.id // taken raw id from user
        let Sid = {} //use to save id 
        //determine that id is is mongose or custom id
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

export const update = async (req, res)=>{
    try{
        const Uid = req.params.id // taken user id
        const data = req.body // taken data
        //deteming id is mongose ur custom
        let filter = (Uid.length === 24 && /^[a-fA-F0-9]+$/.test(Uid))
                    ?{_id: Uid}
                    :{id: Uid}
        const updater = await schema.findOneAndUpdate(
            filter,
            data,
            {new: true}
        )
        res.send(updater)
        console.log("Data is updated");
    }
    catch(err){
        res.send(err)
    }
}

export const removeTask = async (req, res)=>{
    try{
        const Uid = req.params.id // taken user id
        let filter = (Uid.length === 24 && /^[a-fA-F0-9]+$/.test(Uid)) ?{_id: Uid}:{id: Uid}
        const deleter = await schema.findOneAndDelete(filter)
        res.status(200).send(deleter)
        console.log("Data is deleted sucessefuly");
    }
    catch(err){
        res.status(500).send(err)
    }
}