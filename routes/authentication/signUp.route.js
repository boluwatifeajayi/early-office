const express = require("express");
const { oauthSignup, studentSignUp, companySignUp } = require("../../controllers/authentication/signUp.controller");
const validation = require("../../middlewares/validation/validation");

const {
  studentSignUpSchema,
  companySignUpSchema,
} = require("../../middlewares/validation/validation.Schema/signUp.schema");
var route = express.Router();

// Student signup route
route.post(
  "/api/student/signUp",
  validation(studentSignUpSchema),
  studentSignUp
);

// Student oauth route
route.get("/api/oauth/google/signup", oauthSignup);

// Company signup route
route.post(
  "/api/company/signUp",
  validation(companySignUpSchema),
  companySignUp
);

module.exports = route;
