const joi = require("joi");

const studentSignUpSchema = joi.object().keys({
    firstname : joi.string().required().label("Student first name"),
    lastname : joi.string().required().label("Student last name"),
    email : joi.string().email().required().label("Student email"),
    password : joi.string().required().label("Student password"),
    phoneNumber : joi.string().required().label("Student phone number"),
});
const companySignUpSchema = joi.object().keys({
    firstname : joi.string().required().label("first name"),
    lastname : joi.string().required().label("last name"),
    email : joi.string().email().required().label("Company email"),
    password : joi.string().required().label("Company password"),
    phoneNumber : joi.string().required().label("Company phone number"),
    orgName: joi.string().required().label("Company name")
})

module.exports = {
    studentSignUpSchema, 
    companySignUpSchema
}
