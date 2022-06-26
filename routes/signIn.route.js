const express = require("express")
var route = express.Router()

// Student signin route
route.post("/api/studentSignIn", studentSignIn)

// Company signin route
route.post("/api/companySignIn", companySignIn)

module.exports = route
