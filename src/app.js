const express = require("express");
require("./db/conn");
const Student = require("./models/students");

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());

// app.post("/students", (req, res) => {
//     console.log(req.body);
//     const user = new Student(req.body);

//     user.save().then(() => {
//         res.status(201).send(user);
//     }).catch((e) => {
//         res.status(400).send(e);
//     });
//     // res.send("hello from server side");
// })

app.post("/students", async (req, res) => {
    // console.log(req.body);
    try {
        const user = new Student(req.body);
        const createUser = await user.save();
        res.status(201).send(createUser);
    } catch (e) { res.status(400).send(e); }
    // res.send("hello from server side");
})

app.get("/students", async (req, res) => {
    try {
     
        const studentData = await Student.find();
        res.status(200).send(studentData);
    } catch (e) { res.status(400).send(e); }
   
})

app.get("/students/:id", async (req, res) => {
    try {
     const _id=req.params.id;
        const studentData = await Student.findById(_id);

        if(!studentData){
            res.status(404).send();
        }else{
            res.send(studentData);
        }
    } catch (e) { res.status(500).send(e); }
})

app.get("/students/name", async (req, res) => {
    
    try {
     const _id=req.params.name;
        const studentData = await Student.find({name:_id});
        console.log(studentData);
        if(!studentData){
            res.status(404).send();
        }else{
            res.send(studentData);
        }
    } catch (e) { res.status(500).send(e); }
 
})





app.listen(port, () => { console.log(`connection is setup at ${port}`); })    