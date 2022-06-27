const express = require("express");
var route = express.Router()

// Create job
route.post("/api/job/create", createJob)

// Get all jobs
route.get("/api/jobs", getAllJobs)

// Get company's job
route.get("/api/:companyName/jobs", getCompanyJobs)

// Get job by id
route.get("/api/jobs/id/:jobId", getJobById)

// Get job by state
route.get("/api/jobs/state/:state", getStateJobs)

// Get job by role.
route.get("/api/jobs/role/:role?", getRoleJobs)

// Get job by job type
route.get("/api/jobs/type/:type")

// Get job by Skills

// Get job by Salary

// 

route.get("")

module.exports = route