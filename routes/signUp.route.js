const express = require("express");
const { oauthSignup } = require("../controllers/signUp.controller");
const validation = require("../middlewares/validation/validation");

const { studentSignUpSchema, companySignUpSchema } = require("../middlewares/validation/validation.Schema/signUp.schema");
const studentSignUp = require("../controllers/signUp.controller").studentSignUp;
const companySignUp = require("../controllers/signUp.controller").companySignUp;
var route = express.Router();

// Student signup route
route.post("/api/student/signUp", validation(studentSignUpSchema), studentSignUp)

// Student oauth route
route.post("/api/oauth/google/signUp", oauthSignup)



// Company signup route
route.post("/api/company/signUp", validation(companySignUpSchema), companySignUp)

module.exports = route
