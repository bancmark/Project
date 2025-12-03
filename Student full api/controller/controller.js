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
        const Finder = await studentSchema.find({ id: stid })

        await res.send(Finder)
    }
    catch (err) {
        res.send(err)
    }
}

export const ByMongoose = async (req, res) => {
    try {
        const stId = req.params.Mongooseid
        const Finder = await studentSchema.findById(stId)
        await res.send(Finder)
    }
    catch (err) {
        res.send(err)
    }
}

export const Byname = async (req, res) => {
    try {
        const Qname = req.query.name
        const NFinder = await studentSchema.find({ name: new RegExp(Qname, 'i') })
        await res.send(NFinder)
    }
    catch (err) {
        res.send(err)
    }
}

export const Update = async (req, res) => {
    try {
        const id = req.params.id
        const UpdatedData = req.body

        // Determine filter (MongoId or custom id)
        let filter = {}
        if (id.length === 24 && /^[a-fA-F0-9]+$/.test(id)) {
            filter = { _id: id }
        }
        else {
            filter = { id: id }
        }


        const Updater = await studentSchema.findOneAndUpdate(
            filter,
            UpdatedData,
            { new: true }
        )

        if (!Updater) {
            res.status(404).send("ome thind is woring")
        }

        res.send(Updater)
        console.log(Updater);
    }
    catch (err) {
        res.send(err)
    }
}

export const Delete = async (req, res) => {
    try {
        const id = req.params.id

        // Determine filter (MongoId or custom id)
        let filter = {}
        if (id.length === 24 && /^[a-fA-F0-9]+$/.test(id)) {
            filter = { _id: id }
        }
        else {
            filter = { id: id }
        }


        const deleter = await studentSchema.findOneAndDelete(filter)
        if (!deletedStudent) {
            return res.status(404).send("No student found with this ID");
        }
        res.send({
            msg: "iteam is deleed",
            dle: deleter
        })
    }
    catch (err) {
        res.send(err)
    }
}


export const pagination = async (req, res) => {
    try {
        const page = parseInt(req.query.p) || 1
        const limit = parseInt(req.query.l) || 5
        const skip = (page - 1) * limit;
        const finder = await studentSchema.find()
            .skip(skip)
            .limit(limit)
        res.send(finder);
    }
    catch (err) {
        res.status(400).send(err);
    }
}