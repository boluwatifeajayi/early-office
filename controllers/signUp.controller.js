const student = require("../models/student.model");

async function studentSignUp (req, res){
    const {email, lastname, firstname, password} = req.body;
    try {
       const newStudent = await student.create({
            email, 
            lastname, 
            firstname, 
            password
        })
        console.log("created new student @" + newStudent);
        return res.status(201).json("Student created successfully");
    } catch (error) {
        console.log(error.message);
        return res.status(400).json({error:error.message});
    }
}

async function companySignUp (req, res){
    
}

module.exports = {
    studentSignUp,
    companySignUp
}