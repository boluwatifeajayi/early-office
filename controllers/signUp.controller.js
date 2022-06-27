const student = require("../models/student.model");
const hashPassword = require("../middlewares/helperfunctions/hashPassword.helper").hashPassword;
async function studentSignUp (req, res){
    // destructuring req.body
    const {email, lastname, firstname, password , phoneNumber} = req.body;
    const hashedPassword = await hashPassword(password);
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

        if(error.code == 11000)  return res.status(400).json({error: "Provide a valid email"});
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
    // destructuring req.body
    const {email, password, firstname, lastname, phoneNumber, orgName} = req.body;
    const hashedPassword = await hashPassword(password);
    try {
        const newCompany = await student.create({
            orgName,
            email, 
            lastname, 
            firstname, 
            password : hashedPassword,
            phoneNumber
        });
        console.log("created new company @" + newCompany);
        return res.status(201).json(newCompany);
    } catch (error) {
        console.log(error.message);
        if(error.code == 11000)  return res.status(400).json({error: "Provide a valid email"});
        return res.status(400).json({error:error.message});
    }

}

module.exports = {
    studentSignUp,
    updateStudentProfile,
    changeStudentPassword,
    companySignUp
}