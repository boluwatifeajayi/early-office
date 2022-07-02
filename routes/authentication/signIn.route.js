const express = require("express");
const {
  studentSignIn,
  companySignIn,
} = require("../../controllers/authentication/signIn.controller");
var route = express.Router();

// Student signin route
route.post("/api/student/signIn", studentSignIn);

// Company signin route
route.post("/api/company/signIn", companySignIn);

module.exports = route;
