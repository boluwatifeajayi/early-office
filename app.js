require("dotenv").config();
const express = require("express");
const dbConnect = require("./middlewares/dbUtil/dbconnect");
const app = express();
const cors = require("cors");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const nodemailer = require("nodemailer");

// Requiring routes
const authentication = require("./routes/authentication/indexAuthentication.route");
const studentRoutes = require("./routes/student.route");
const profileRoutes = require("./routes/profile/index.profile");
const jobRoutes = require("./routes/job.route");
const mailSender = require("./middlewares/helperfunctions/mailSender");

// setting cors
const whiteList = ["http://localhost:3000", "http://localhost:3001"];
const corsOption = {
  origin: whiteList,
  credentials: true,
};

// Using general middlewares
app.use(helmet());
app.use(cors(corsOption));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Using routes
app.use(authentication);
app.use(studentRoutes);
app.use(profileRoutes);
app.use(jobRoutes);

// app.get("/check/:name", (req, res) => {
//   res.json(req.params);
// });

// app.get("/mails", async (req, res) => {
//   const mailer = await mailSender();
//   const responseCode = mailer;
//   if (responseCode != 250) return "nooo";
//   res.json(mailer);
// });

// Database connection and starting the server
const PORT = process.env.PORT;
const SERVER = "localhost";
dbConnect().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on http://${SERVER}:${PORT}`);
  });
});
