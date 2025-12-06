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