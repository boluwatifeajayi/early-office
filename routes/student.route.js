const express = require("express");
const getStudents = require("../controllers/student.controller").getStudents;
const getStudentById =
  require("../controllers/student.controller").getStudentById;
const getStudentByLocation =
  require("../controllers/student.controller").getStudentByLocation;
const getStudentByInterest =
  require("../controllers/student.controller").getStudentByInterest;
var route = express.Router();

// Get all students
route.get("/api/students", getStudents);

// Get student by id
route.get("/api/student/id/:id", getStudentById);

// Get student by location
route.get("/api/student/location/:location", getStudentByLocation);

// Get student by fieldOfInterest
route.get(
  "/api/student/fieldofinterest/:fieldOfInterest",
  getStudentByInterest
);

module.exports = route;
