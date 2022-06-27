const joi = require("joi")

const studentSignUpSchema = joi.object().keys({
    firstname : joi.string().required().label("Student first name"),
    lastname : joi.string().required().label("Student last name"),
    email : joi.string().email().required().label("Student email"),
    password : joi.string().required().label("Student password"),
    phoneNumber : joi.string().required().label("Student phone number"),
})

module.exports = {
    studentSignUpSchema
}
