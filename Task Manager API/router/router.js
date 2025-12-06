import express from 'express'
import {taskAdd, see} from '../controller/controller.js'

const router = express.Router()

router.get('/', (req, res)=>{
    res.send("what do you want")
})

router.post('/add', taskAdd)
router.get('/see/:id', see)

export default router