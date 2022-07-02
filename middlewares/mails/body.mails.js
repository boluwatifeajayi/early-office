const createJobBody = (job) =>
  `The job: <a>${job.role}</a> has been created successfully`;

const appliedToJobBody = (job,student) =>
  `Hey ${student.firstname} <br>
  Your application for ${job.role} has been sent to ${job.org.orgName}.`;
module.exports = { createJobBody, appliedToJobBody };
