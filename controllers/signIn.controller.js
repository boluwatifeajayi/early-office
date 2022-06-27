const student = require("../models/student.model");
const company = require("../models/company.model");
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
      const token = jwt.sign(
        { id: currentStudent._id.toString(), email },
        process.env.TOKEN_KEY
      );
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
    return res.status(500).json("Server error");
  }
}

async function companySignIn(req, res) {
  const { email, password } = req.body;
  try {
    const currentCompany = await company.findOne({ email });
    if (currentCompany == null || typeof currentCompany == undefined)
      return res.status(401).json({ error: "User does not exist" });

    const passwordCompare = await bcrypt.compare(
      password,
      currentCompany.password
    );
    if (passwordCompare) {
      const token = jwt.sign(
        { id: currentCompany._id.toString(), email },
        process.env.TOKEN_KEY
      );
      const response = {
        currentCompany,
        authToken: token,
      };
      return res.status(200).json(response);
    } else {
      return res.status(401).json("Incorrect Password");
    }
  } catch (error) {
    console.log(error.message);
    return res.status(500).json("Server error");
  }
}

module.exports = {
  studentSignIn,
  companySignIn,
};
