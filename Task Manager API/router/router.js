import express from 'express'
import {taskAdd, see, update, removeTask} from '../controller/controller.js'

const router = express.Router()

router.get('/', (req, res)=>{
    res.send("what do you want")
})

router.post('/add', taskAdd)
router.get('/see/:id', see)
router.put('/update/:id', update)
router.delete('/delete/:id', removeTask)

export default router