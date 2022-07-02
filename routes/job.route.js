const express = require("express");
const jobapplySchema = require("../middlewares/validation/validation.Schema/Jobs/jobApplication.schema");
const createJobSchema = require("../middlewares/validation/validation.Schema/Jobs/createJob.schema")
const validation = require("../middlewares/validation/validation");
var route = express.Router();
const { protectedRoutes } = require("../middlewares/authentication/protectedRoutes");
const {
  applyToJob,
  createJob,
  getStateJobs,
  getTypeJobs,
  getSalaryJobs,
  getAllJobs,
  getCompanyJobs,
  getJobById,
} = require("../controllers/job.controller");

// Create job
// route.post("/api/job/create", createJob);
route.post("/api/:companyName/job/create",protectedRoutes, validation(createJobSchema), createJob);

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

route.post("/api/jobs/:jobid/apply", protectedRoutes, validation(jobapplySchema), applyToJob);

module.exports = route;
