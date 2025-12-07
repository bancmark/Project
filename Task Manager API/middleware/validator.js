import joi from 'joi';

const createSchema = joi.object({
    task: joi.string().min(1).max(200).required(),
    completed: joi.boolean().optional()
})

const updateSchema = joi.object({
    task: joi.string().min(1).max(200).optional(),
    completed: joi.boolean().optional()
}).or("task", "completed")

export const createrValidator = (req, res, next) => {
    const pass = req.query.pass
    if (pass !== "pass") {
        res.status(401).send('invalid')
    }

    const { err } = createSchema.validate(req.body)
    if (err) return res.send("Something is wrong")

    next()
}

export const updaterValidator = (req, res, next) => {
    const pass = req.query.pass
    if (pass !== "pass") {
        res.status(401).send('invalid')
    }

    const { err } = updateSchema.validate(req.body)
    if (err) return res.send("Something is wrong")

    next()
}

export const deleterValidator = (req, res, next) => {
    const pass = req.query.pass
    if (pass !== "pass") {
        res.status(401).send('invalid')
    }
    next()
}