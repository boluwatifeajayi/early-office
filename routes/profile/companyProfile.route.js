const express = require("express");
const { updateCompanyProfile } = require("../../controllers/profile/companyProfile.controller");
const { changeStudentPassword } = require("../../controllers/profile/studentProfile.controller");
const { protectedRoutes } = require("../../middlewares/authentication/protectedRoutes");
var route = express.Router();

// Update Company profile 
route.post("/api/Company/profile/update",protectedRoutes, updateCompanyProfile)

// Change Company password
// route.post("/api/Company/change/password",protectedRoutes,changeStudentPassword)
route.post("/api/Company/profile/update/password",protectedRoutes,changeStudentPassword)


module.exports = route;