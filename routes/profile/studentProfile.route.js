const express = require("express");
const { updateStudentProfile, changeStudentPassword } = require("../../controllers/profile/studentProfile.controller");
const { protectedRoutes } = require("../../middlewares/authentication/protectedRoutes");
var route = express.Router();


// Update student profile 
route.post("/api/student/profile/update",protectedRoutes, updateStudentProfile)

// Change student password
// route.post("/api/student/change/password",protectedRoutes,changeStudentPassword)
route.post("/api/student/profile/update/password",protectedRoutes,changeStudentPassword)


module.exports = route;