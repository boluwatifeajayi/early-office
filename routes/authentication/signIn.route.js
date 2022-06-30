const express = require("express");
const studentSignIn = require("../../controllers/authentication/signIn.controller").studentSignIn;
const companySignIn = require("../../controllers/authentication/signIn.controller").companySignIn;
var route = express.Router();

// Student signin route
route.post("/api/student/signIn", studentSignIn);

// Company signin route
route.post("/api/company/signIn", companySignIn);

module.exports = route;