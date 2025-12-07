import express from 'express'
import {taskAdd, see, update, removeTask} from '../controller/controller.js'
import {createrValidator, updaterValidator, deleterValidator} from '../middleware/validator.js'

const router = express.Router()

router.get('/', (req, res)=>{
    res.send("what do you want")
})

router.post('/add', createrValidator, taskAdd)
router.get('/see/:id', see)
router.put('/update/:id', updaterValidator, update)
router.delete('/delete/:id',deleterValidator, removeTask)

export default router