import express from 'express'
import {addStudent, viewStudent, ByMongoose} from '../controller/controller.js'
const router = express.Router()



router.get('/', (req, res)=>{
    res.send("Now you enter student home what doyou want")
})

router.post('/add', addStudent)
router.get('/get/class/:Classid', viewStudent)
router.get('/get/mongoose/:Mongooseid', ByMongoose)

export default router