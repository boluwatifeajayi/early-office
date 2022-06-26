const express = require("express");
const studentSignUp = require("../controllers/signUp.controller").studentSignUp;
const companySignUp = require("../controllers/signUp.controller").companySignUp;
var route = express.Router()

// Student signup route
route.post("/api/studentSignUp", studentSignUp)

// Company signup route
route.post("/api/companySignUp", companySignUp)

module.exports = route
