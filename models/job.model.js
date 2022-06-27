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

    currencyType: {
      type: String,
    },

    salary: {
      type: Number,
    },

    duration: {
      type: String,
    },

    location: {
      state : {
        type : String
      },

      country : {
        type : String,
        default : "Nigeria"
      }
    },

    additionalInformation: {
      type: String,
    },
  },
  { timestamps: true }
);

const jobModel = mongoose.model("job", jobSchema);

module.exports = jobModel;
