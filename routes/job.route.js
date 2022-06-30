const express = require("express");
var route = express.Router();
const {
  createJob,
  getStateJobs,
  getTypeJobs,
  getSalaryJobs,
  applyToJob,
  getAllJobs,
  getCompanyJobs,
  getJobById,
} = require("../controllers/job.controller");

// Create job
// route.post("/api/job/create", createJob);
route.post("/api/:companyName/job/create", createJob);

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
route.get("/api/jobs/salary", getSalaryJobs);

// TO APPLY FOR A PARTICULAR JOB
route.post("api/jobs/:jobid/apply", applyToJob);

module.exports = route;
