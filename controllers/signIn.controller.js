const student = require("../models/student.model");

async function studentSignIn(req,res){
    const {email, password} = req.body;
    try {
        const currentStudent = await student.findOne({email, password}).exec();
        if (currentStudent == null) return res.status(401).send("Invalid credentials")
        return res.status(200).json(currentStudent);
    } catch (error) {
        console.log(error.message);
    }
    
}

async function companySignIn(req,res){

    return 0;
}


module.exports = {
    studentSignIn,
    companySignIn
}