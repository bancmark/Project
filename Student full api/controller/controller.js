import {studentSchema} from '../studentschema/student.js'

export const addStudent = async(req, res)=>{
    try{
    const AdderData = req.body;
    const add = new studentSchema(AdderData)
    await add.save()
    res.send(add)
    }
    catch(err){
        res.send(err)
    }
}