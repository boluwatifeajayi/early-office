const createJobBody = (job) =>
  `The job: <a>${job.role}</a> has been created successfully`;

const appliedToJobBody = (job) =>
  `Your application was sent to ${job.org.orgName} <br> `;
module.exports = { createJobBody };
