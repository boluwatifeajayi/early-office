const express = require("express");
const studentSignIn = require("../controllers/signIn.controller").studentSignIn;
const companySignIn = require("../controllers/signIn.controller").companySignIn;
var route = express.Router()

// Student signin route
route.post("/api/studentSignIn", studentSignIn)

// Company signin route
route.post("/api/companySignIn", companySignIn)

module.exports = route
