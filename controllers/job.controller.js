const jobModel = require("../models/job.model");
const companyModel = require("../models/company.model");
const { deleteModel } = require("mongoose");
const createJob = async (req, res) => {
  const {
    Role,
    jobResponsibility,
    jobType,
    NumberOfOpenings,
    companyId,
    SkillsNeeded,
    salary,
    duration,
    location,
  } = req.body;
  try {
    const newJob = jobModel.create({
      Role,
      jobResponsibility,
      jobType,
      NumberOfOpenings,
      companyId,
      SkillsNeeded,
      salary,
      duration,
      location,
    });
    return res.status(201).json(newJob);
  } catch (error) {
    console.log(error.message);

    if (error.code == 11000)
      return res.status(400).json({ error: "Provide a valid email" });
    return res.status(400).json({ error: error.message });
  }
};
const getAllJobs = async (req, res) => {
  try {
    const allJobs = jobModel.find();
    res.status(200).json(allJobs);
  } catch (error) {
    res.status(404).json({ error: "No jobs available" });
  }
};
const getCompanyJobs = async (req, res) => {
  try {
    const { companyName } = req.params;
    const companyId = await companyModel.findOne({ orgName: companyName });
    const jobsForCompany = await jobModel.find({ companyId });
    res.status(200).json(jobsForCompany);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
const getJobById = async (req, res) => {
  const { jobId } = req.params;
  try {
    const currentJob = jobModel.findById(jobId);
    res.status(200).json(currentJob);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = { createJob, getAllJobs, getCompanyJobs, getJobById };
