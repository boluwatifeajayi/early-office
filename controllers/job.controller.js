const jobModel = require("../models/job.model");
const companyModel = require("../models/company.model");

const createJob = async (req, res) => {
  const {
    Role,
    jobResponsibility,
    jobType,
    NumberOfOpenings,
    SkillsNeeded,
    salary,
    duration,
    location,
  } = req.body;
  const { companyId } = req.params;

  try {
    companyModel.findById(companyId);
    const newJob = await jobModel.create({
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
      return res.status(400).json({ error: "Job already exists" });
    return res.status(400).json({ error: error.message });
  }
};

const getAllJobs = async (req, res) => {
  try {
    const allJobs = await jobModel.find();
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
    const currentJob = await jobModel.findById(jobId);
    res.status(200).json(currentJob);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const getStateJobs = async (req, res) => {
  const { state } = req.params;
  try {
    const currentJob = await jobModel.find({ location: { state: state } });
    res.status(200).json(currentJob);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const getTypeJobs = async (req, res) => {
  const { type } = req.params;
  try {
    const currentJob = jobModel.find({ type });
    res.status(200).json(currentJob);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const getSalaryJobs = async (req, res) => {
  const { minSalary, maxSalary } = req.query;
  try {
    const currentJob = jobModel.find({
      salary: { $gt: minSalary, $lt: maxSalary },
    });
    res.status(200).json(currentJob);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = {
  createJob,
  getAllJobs,
  getCompanyJobs,
  getJobById,
  getStateJobs,
  getTypeJobs,
  getSalaryJobs,
};
