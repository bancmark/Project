import express from 'express'
import {addStudent} from '../controller/controller.js'
const router = express.Router()



router.get('/', (req, res)=>{
    res.send("Now you enter student home what doyou want")
})

router.post('/add', addStudent)

export default router