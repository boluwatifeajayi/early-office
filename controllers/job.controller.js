const jobModel = require("../models/job.model");
const companyModel = require("../models/company.model");
const mailSender = require("../middlewares/helperfunctions/mailSender");
const {
  createJobBody,
  appliedToJobTitle,
} = require("../middlewares/mails/body.mails");
const {
  createJobTitle,
  appliedToJobBody,
} = require("../middlewares/mails/title.mails");

const createJob = async (req, res) => {
  try {
    const {
      role,
      jobResponsibility,
      jobType,
      numberOfOpenings,
      skillsNeeded,
      salary,
      duration,
      location,
    } = req.body;
    const { companyName: orgName } = req.params;
    const currentOrg = await companyModel.findOne({ orgName });
    const { orgId, orgEmail } = currentOrg;
    const newJob = await jobModel.create({
      role,
      jobResponsibility,
      jobType,
      numberOfOpenings,
      org: {
        orgId,
        orgEmail,
        orgName,
      },
      skillsNeeded,
      salary,
      duration,
      location,
    });

    await mailSender(...orgName, {
      title: createJobTitle(newJob),
      body: createJobBody(newJob),
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
  try {
    const { jobId } = req.params;
    const currentJob = await jobModel.findById(jobId);
    res.status(200).json(currentJob);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const getStateJobs = async (req, res) => {
  try {
    const { state } = req.params;
    const currentJob = await jobModel.find({ location: { state: state } });
    res.status(200).json(currentJob);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const getTypeJobs = async (req, res) => {
  try {
    const { type } = req.params;
    const currentJob = jobModel.find({ type });
    res.status(200).json(currentJob);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const getSalaryJobs = async (req, res) => {
  try {
    const { minSalary, maxSalary } = req.query;
    const currentJob = jobModel.find({
      salary: { $gt: minSalary, $lt: maxSalary },
    });
    res.status(200).json(currentJob);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const applyToJob = async (req, res) => {
  try {
    const { studentId } = res.locals.decodedToken;
    if (studentId == null)
      return res
        .status(400)
        .json({ error: "Ensure you are a student to access this route" });
    const { reasonToBeHired, jobAvailability } = req.body;
    const { jobid } = req.params;
    const appliedAt = Date.now();
    const newJobApplication = await jobModel.findByIdAndUpdate(
      jobid,
      {
        $push: {
          student: { studentId, reasonToBeHired, jobAvailability, appliedAt },
        },
      },
      { new: true }
    );

    // await mailSender(...orgName, {
    //   title: createJobTitle(newJob),
    //   body: createJobBody(newJob),
    // });
    res.status(201).json(newJobApplication);
  } catch (error) {
    res.status(400).json({ error: error.message });
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
  applyToJob,
};
