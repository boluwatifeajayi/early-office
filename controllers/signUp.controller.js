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
    companySignUp
}