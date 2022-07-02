const { default: mongoose } = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    role: {
      type: String,
    },
    jobName:{
      type:String
    },

    jobResponsibility: {
      type: [String],
    },

    jobType: {
      type: String,
    },

    numberOfOpenings: {
      type: String,
    },

    org: {
      orgId: {
        type: String,
      },
      orgName: {
        type: String,
      },
      orgEmail: {
        type: String,
      },
    },
    skillsNeeded: {
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
      state: {
        type: String,
      },

      country: {
        type: String,
        default: "Nigeria",
      },
    },

    additionalInformation: {
      type: String,
    },
    student: [
      {
        studentId: {
          type: String,
        },
        reasonToBeHired: {
          type: String,
        },
        jobAvailability: {
          type: String,
        },
        appliedAt: {
          type: Date,
        },
      },
    ],
  },
  { timestamps: true }
);

const jobModel = mongoose.model("job", jobSchema);

module.exports = jobModel;
