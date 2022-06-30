const companyModel = require("../models/company.model");
const studentModel = require("../models/student.model");
const oAuthstudentSignUpSchema =
  require("../middlewares/validation/validation.Schema/signUp.schema").oAuthStudentSignUpSchema;
const axios = require("axios");
const hashPassword =
  require("../middlewares/helperfunctions/hashPassword.helper").hashPassword;
const jwt = require("jsonwebtoken");

async function studentSignUp(req, res) {
  // destructuring req.body
  const { email, lastname, firstname, password, phoneNumber } = req.body;
  const hashedPassword = await hashPassword(password);
  try {
    const newStudent = await studentModel.create({
      email,
      lastname,
      firstname,
      password: hashedPassword,
      phoneNumber,
    });
    console.log("created new student @" + newStudent);

    const token = jwt.sign(
      { id: newStudent._id.toString(), email },
      process.env.TOKEN_KEY
    );

    const response = {
      newStudent,
      authToken: token,
    };

    res.cookie("authToken", token);
    return res.status(201).json(response);
  } catch (error) {
    console.log(error.message);

    if (error.code == 11000)
      return res.status(400).json({ error: "Email already registered!" });
    return res.status(400).json({ error: error.message });
  }
}

async function companySignUp(req, res) {
  // destructuring req.body
  const {
    AdminFirstName,
    AdminLastName,
    orgEmail,
    orgPassword,
    phoneNumber,
    orgName,
    orgDescription,
  } = req.body;
  console.log(req.body);
  const hashedPassword = await hashPassword(orgPassword);
  try {
    const newCompany = await companyModel.create({
      AdminFirstName,
      AdminLastName,
      orgEmail,
      orgPassword: hashedPassword,
      phoneNumber,
      orgName,
      orgDescription,
    });
    console.log("created new company @" + newCompany);

    const token = jwt.sign(
      { id: newCompany._id.toString(), orgEmail },
      process.env.TOKEN_KEY
    );
    const response = {
      newCompany,
      authToken: token,
    };

    res.cookie("authToken", token);
    return res.status(201).json(response);
  } catch (error) {
    console.log(error.message);
    if (error.code == 11000)
      return res.status(400).json({ error: "Account already exists" });
    return res.status(400).json({ error: error.message });
  }
}

async function oauthSignup(req, res) {
  try {
    console.log("NEW REQUEST!!!");
    const CLIENT_ID =
      "906540842423-7ki40si5b62f8dvlem89emrm28vk83rm.apps.googleusercontent.com";
    const CLIENT_SECRET = "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";
    const REDIRECT_URI = "http://localhost:4500/api/oauth/google/signup";
    const SIGN_WITH_GOOGLE = `https://accounts.google.com/o/oauth2/v2/auth?scope=https%3A//www.googleapis.com/auth/userinfo.profile&include_granted_scopes=true&response_type=code&state=state&redirect_uri=${REDIRECT_URI}&client_id=${CLIENT_ID}`;
    const { code } = req.query;
    const response = await axios.post(
      `https://www.googleapis.com/oauth2/v4/token?code=${code}&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&redirect_uri=${REDIRECT_URI}&grant_type=authorization_code`
    );
    console.log(response.data);
    const { access_token } = response.data;
    console.log("access token =  " + access_token);
    const getUserData = await axios.get(
      `https://www.googleapis.com/oauth2/v2/userinfo?access_token=${access_token}`
    );
    const {
      email,
      given_name: firstname,
      family_name: lastname,
    } = getUserData.data;
    const password =
      Date.now().toString(36) +
      Math.floor(
        Math.pow(10, 12) + Math.random() * 9 * Math.pow(10, 12)
      ).toString(36);
    const oAuthStudent = { email, firstname, lastname, password };

    const validationResult = oAuthstudentSignUpSchema.validate(oAuthStudent);
    const { error } = validationResult;
    const valid = error == null;

    if (valid) {
      req.body = oAuthStudent;
      console.log(req.body);
      await studentSignUp(req, res);
    } else {
      const { details } = error;
      const message = details.map((detail) => detail.message).join(",");
      console.log("error", message);
      res.status(422).json({ error: message });
    }
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}

module.exports = {
  studentSignUp,
  companySignUp,
  oauthSignup,
};
