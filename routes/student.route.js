const express = require("express")
var route = express.Router()

// Get all students
route.get("/api/students", getStudents)

// Get student by id
route.get("/api/student/id/:id", getStudentById)

// Get student by location
route.get("/api/student/location/:location",getStudentByLocation)

// Get student by fieldOfInterest
route.get("/api/student/fieldOfInterest/:fieldOfInterest",getStudentByInterest)


module.exports = route