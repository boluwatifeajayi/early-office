const express = require("express");
var route = express.Router();
const { getCompanies } = require("../controllers/company.controller");
const { getCompanyById } = require("../controllers/company.controller");
//Get all companies
route.get("/api/company/all", getCompanies);
// Get company by id
route.get("/api/company/id/:id", getCompanyById);

// Get company by location
// route.get("/api/company/location/:location", getCompanyByLocation);

// Update status of job

module.exports = route;
