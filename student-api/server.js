import express from 'express';
const app = express();
const port = 3000;

import { students } from './database/student.js';

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/student', (req, res) => {
    res.send(`Please etner student id no in url for seraching student details. Example: /students/1`);
});


//to get student by id
app.get('/student/:id', (req, res) => {
    let studentId = parseInt(req.params.id)
    let student = students.find(s => s.id === studentId)
    if (!student) {
        return res.status(404).send(`Student with id ${studentId} not found`)
    }
    res.json(student)
    console.log("we send student details successfully");
})


//to create a new student
app.post('/student', (req, res) => {
    const newStudent = {
        id: students.length + 1,
        name: req.body.name,
        age: req.body.age,
        major: req.body.major,
    }
    students.push(newStudent)
    res.status(201).json(newStudent)
    console.log("data have been recived");
})


//delete student by id
app.delete('/student/:id', (req, res)=>{
    let studentId = parseInt(req.params.id)
    let index = students.findIndex(s => s.id === studentId)
    if(index === -1){
        return res.status(404).send(`Student with id ${studentId} not found`)
    }
    students.splice(index, 1)
    res.send(`Student with id ${studentId} has been deleted`)
    console.log("student data deleted successfully");
})



app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});