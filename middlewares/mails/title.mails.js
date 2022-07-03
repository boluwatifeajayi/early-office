const createJobTitle = (job) => `You just created a job`;
const appliedToJobTitle = (job, student) =>
  `You applied for ${job.role} at ${job.org.orgName} `;

const studentSignUpTitle = () => `Sign up successful`;
const companySignUpTitle = () => `Sign up successful`;
module.exports = {
  createJobTitle,
  appliedToJobTitle,
  studentSignUpTitle,
  companySignUpTitle,
};
