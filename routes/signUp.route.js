const express = require("express")
var route = express.Router()

// Student signup route
route.post("/api/studentSignUp", studentSignUp)

// Company signup route
route.post("/api/companySignUp", companySignUp)

module.exports = route
