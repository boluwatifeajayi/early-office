const express = require("express");
var route = express.Router();
const {
  createJob,
  getStateJobs,
  getTypeJobs,
  getSalaryJobs,
} = require("../controllers/job.controller");
const { getAllJobs } = require("../controllers/job.controller");
const { getCompanyJobs } = require("../controllers/job.controller");
const { getJobById } = require("../controllers/job.controller");

// Create job
// route.post("/api/job/create", createJob);
route.post("/api/:companyId/job/create", createJob);

// Get all jobs
route.get("/api/jobs", getAllJobs);

// Get company's job
route.get("/api/:companyName/jobs", getCompanyJobs);

// Get job by id
route.get("/api/jobs/id/:jobId", getJobById);

// Get job by state
route.get("/api/jobs/state/:state", getStateJobs);

// Get job by job type
route.get("/api/jobs/type/:type", getTypeJobs);

// // Get job by role.
// route.get("/api/jobs/role/:role?",);

// // Get job by Skills
// route.post("/api/jobs/role/:skills",);

// Get job by Salary. <Using query params> i.e minSalary and maxSalary
route.post("/api/jobs/salary", getSalaryJobs);

// route.get("")

module.exports = route;
