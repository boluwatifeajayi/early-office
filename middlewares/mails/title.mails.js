const createJobTitle = (job) => `You just created a job`;
const appliedToJobTitle = (job) =>
  `You applied for ${job.role} at ${job.org.orgName} `;

module.exports = { createJobTitle, appliedToJobTitle };
