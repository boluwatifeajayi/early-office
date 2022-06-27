const student = require("../models/student.model");
const bcrypt = require("bcrypt")

async function studentSignUp (req, res){
    // Declaring salt
    const salt = await bcrypt.genSalt(10)

    // destructuring req.body
    const {email, lastname, firstname, password , phoneNumber} = req.body;
    const hashedPassword = await bcrypt.hash(password,salt)
    try {
        const newStudent = await student.create({
            email, 
            lastname, 
            firstname, 
            password : hashedPassword,
            phoneNumber
        })
        console.log("created new student @" + newStudent);
        return res.status(201).json(newStudent);
    } catch (error) {
        console.log(error.message);
        return res.status(400).json({error:error.message});
    }
}

async function updateStudentProfile (req,res){
    try{
        const {id} = res.locals.decodedToken;
        const {firstname, lastname, currentLocation, preferredLanguage, status, fieldOfInterest, graduation, workExperience, reasonToHire, jobAvailability} = req.body;
        console.log("res.locals",res.locals);
        const x = await student.findOneAndUpdate({_id : id},
            {
                firstname, 
                lastname, 
                currentLocation, 
                preferredLanguage, 
                status, 
                fieldOfInterest,
                graduation, 
                workExperience, 
                reasonToHire, 
                jobAvailability
            },{
                new : true
            })
        return res.json(x)
    }catch(error){
        console.log(error.message);
        return res.status(400).json({error:error.message});
    }
}

async function changeStudentPassword (req,res){
    try{
        // const re
    }catch(error){
        console.log(error.message);
        return res.status(400).json({error:error.message});
    }
}

async function companySignUp (req, res){
    
}

module.exports = {
    studentSignUp,
    updateStudentProfile,
    changeStudentPassword,
    companySignUp
}