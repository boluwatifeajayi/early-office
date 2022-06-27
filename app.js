require("dotenv").config();

const express = require("express");
const dbConnect = require("./middlewares/dbUtil/dbconnect");
const app = express();
const studentRegister = require("./models/student.model");
app.get("/", async (req, res) => {
  const student = await studentRegister.create({
    firstname: "chiedozie",
    lastname: "nwosu",
    email: "dozie.come",
    password: "doings",
    fieldOfInterest: ["Medicine", "Kung fu", "Programming", "Money ways"],
    graduation: [
      {
        status: "somehow",
        schoolName: "somehow",
        startYear: "somehow",
        degree: "somehow",
        gpa: "E dey",
        gpaScale: "E dey",
      },
    ],
  });
  console.log("saved" + student);
  return res.send("him");
});

const PORT = process.env.PORT;
const SERVER = "localhost";
dbConnect().then(() => {
  app.listen(PORT, SERVER, () => {
    console.log(`Server running on http://${SERVER}:${PORT}`);
  });
});
