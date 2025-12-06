import express from 'express'
import {taskAdd} from '../controller/controller.js'

const router = express.Router()

router.get('/', (req, res)=>{
    res.send("what do you want")
})

router.post('/add', taskAdd)

export default router