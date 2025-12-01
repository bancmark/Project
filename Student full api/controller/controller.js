import { studentSchema } from '../studentschema/student.js'

export const addStudent = async (req, res) => {
    try {
        const AdderData = req.body;
        const add = new studentSchema(AdderData)
        await add.save()
        res.send(add)
    }
    catch (err) {
        res.send(err)
    }
}

export const viewStudent = async (req, res) => {
    try {
        const stid = req.params.Classid
        const Finder = await studentSchema.find({id: stid})
        
        await res.send(Finder)
    }
    catch (err) {
        res.send(err)
    }
}

export const ByMongoose = async(req, res)=>{
    try{
        const stId = req.params.Mongooseid
        const Finder = await studentSchema.findById(stId)
        await res.send(Finder)
    }
    catch(err){
        res.send(err)
    }
}