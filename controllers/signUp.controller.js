const companyModel = require("../models/company.model");
const studentModel = require("../models/student.model");
const hashPassword = require("../middlewares/helperfunctions/hashPassword.helper").hashPassword;
const jwt = require("jsonwebtoken")

async function studentSignUp (req, res){
    // destructuring req.body
    const {email, lastname, firstname, password , phoneNumber} = req.body;
    const hashedPassword = await hashPassword(password);
    try {
        const newStudent = await studentModel.create({
            email, 
            lastname,
            firstname, 
            password : hashedPassword,
            phoneNumber
        })
        console.log("created new student @" + newStudent);

        const token = jwt.sign(
            { id: newStudent._id.toString(), email },
            process.env.TOKEN_KEY
        );

        const response = {
            newStudent,
            authToken: token,
        };

        res.cookie("authToken",token)
        return res.status(201).json(response);
    } catch (error) {
        console.log(error.message);

        if(error.code == 11000)  return res.status(400).json({error: "Provide a valid email"});
        return res.status(400).json({error:error.message});
    }
}





async function companySignUp (req, res){
    // destructuring req.body
    const {AdminFirstName, AdminLastName, orgEmail, orgPassword, phoneNumber, orgName, orgDescription} = req.body;
    console.log(req.body)
    const hashedPassword = await hashPassword(orgPassword);
    try {
        const newCompany = await companyModel.create({
            AdminFirstName,
            AdminLastName,
            orgEmail,
            orgPassword : hashedPassword,
            phoneNumber,
            orgName,
            orgDescription
        });
        console.log("created new company @" + newCompany);

        const token = jwt.sign(
            { id: newCompany._id.toString(), orgEmail },
            process.env.TOKEN_KEY
          );
          const response = {
            newCompany,
            authToken: token,
          };
        
          res.cookie("authToken",token)
        return res.status(201).json(response);
    } catch (error) {
        console.log(error.message);
        if(error.code == 11000)  return res.status(400).json({error: "Account already exists"});
        return res.status(400).json({error:error.message});
    }

}


async function oauthSignup (req,res) {
    try{

    }catch(error){

    }
}

module.exports = {
    studentSignUp,
    companySignUp,
    oauthSignup
}