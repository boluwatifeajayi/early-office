const { default: mongoose } = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    Role: {
      type: String,
    },

    jobResponsibility: {
      type: String,
    },

    jobType: {
      type: String,
    },

    NumberOfOpenings: {
      type: Number,
    },

    companyId: {
      type: String,
    },

    SkillsNeeded: {
      type: [String],
    },

    salary: {
      type: String,
    },

    duration: {
      type: String,
    },

    location: {
      type: String,
    },

    additionalInformation: {
      type: String,
    },
  },
  { timestamps: true }
);

const jobModel = mongoose.model("job", jobSchema);

module.exports = jobModel;
