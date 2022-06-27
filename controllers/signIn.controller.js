const student = require("../models/student.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

async function studentSignIn(req, res) {
  const { email, password } = req.body;
  try {
    const currentStudent = await student.findOne({ email });

    if (currentStudent == null || typeof currentStudent == undefined)
      return res.status(401).json({ error: "User does not exist" });

    const passwordCompare = await bcrypt.compare(
      password,
      currentStudent.password
    );
    if (passwordCompare) {
      const token = jwt.sign({ email }, process.env.TOKEN_KEY);
      const response = {
        currentStudent,
        authToken: token,
      };
      return res.status(200).json(response);
    } else {
      return res.status(401).json("Incorrect Password");
    }
  } catch (error) {
    console.log(error.message);
  }
}

async function companySignIn(req, res) {
  return 0;
}

module.exports = {
  studentSignIn,
  companySignIn,
};
