const express = require("express");
const {
  updateStudentProfile,
  changeStudentPassword,
} = require("../../controllers/profile/studentProfile.controller");
const {
  protectedRoutes,
} = require("../../middlewares/authentication/protectedRoutes");
const validation = require("../../middlewares/validation/validation");
const {
  updateStudentProfileSchema,
} = require("../../middlewares/validation/validation.Schema/updateProfile.schema");
var route = express.Router();

// Update student profile
route.post(
  "/api/student/profile/update",
  protectedRoutes,
  validation(updateStudentProfileSchema),
  updateStudentProfile
);

// Change student password
// route.post("/api/student/change/password",protectedRoutes,changeStudentPassword)
route.post(
  "/api/student/profile/update/password",
  protectedRoutes,
  changeStudentPassword
);

module.exports = route;
