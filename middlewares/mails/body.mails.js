const createJobBody = (job) =>
  `The job: <a>${job.role}</a> has been created successfully`;

const appliedToJobBody = (job, student) =>
  `Hey ${student.firstname} <br>
  Your application for ${job.role} has been sent to ${job.org.orgName}.`;

const studentSignUpBody = (student) =>
  `Congratulations <br> We're happy to have you here. `;
const companySignUpBody = (company) =>
  `Congratulations <br> We're happy to have you here.`;
module.exports = {
  createJobBody,
  appliedToJobBody,
  studentSignUpBody,
  companySignUpBody,
};
