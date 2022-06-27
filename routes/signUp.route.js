const express = require("express");
const { updateStudentProfile } = require("../controllers/signUp.controller");
const { protectedRoutes } = require("../middlewares/authentication/protectedRoutes");
const validation = require("../middlewares/validation/validation");

const { studentSignUpSchema } = require("../middlewares/validation/validation.Schema/signUp.schema");
const studentSignUp = require("../controllers/signUp.controller").studentSignUp;
const companySignUp = require("../controllers/signUp.controller").companySignUp;
var route = express.Router()

// Student signup route
route.post("/api/student/signUp", validation(studentSignUpSchema), studentSignUp)

// Update student profile route
route.post("/api/student/profile/update",protectedRoutes, updateStudentProfile)

// Company signup route
route.post("/api/company/signUp", companySignUp)

module.exports = route
