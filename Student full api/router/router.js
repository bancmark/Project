import express from 'express'
import {addStudent, viewStudent, ByMongoose, Byname, Update, Delete, pagination} from '../controller/controller.js'
const router = express.Router()

const protection = (req, res, next)=>{
    const pass = req.query.pass
    if ( pass === 'pass'){
        next()
    }
    else{
        res.status(400).send("Invalid password")
    }
}


router.get('/', (req, res)=>{
    res.send("Now you enter student home what doyou want")
})

router.post('/add', addStudent)
router.get('/get/class/:Classid', viewStudent)
router.get('/get', Byname)
router.get('/get/mongoose/:Mongooseid', ByMongoose)
router.get('/list', pagination)

router.put('/update/:id', protection, Update)
router.delete('/delete/:id', protection, Delete)

export default router