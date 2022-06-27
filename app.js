require("dotenv").config();
const express =  require("express");
const dbConnect = require("./middlewares/dbUtil/dbconnect");
const app = express();
const cors = require("cors")
const helmet = require("helmet")


// Requiring routes
const signInRoute = require("./routes/signIn.route")
const signUpRoute = require("./routes/signUp.route")

// app.get("/", async (req, res)=>{
//  const student =  await studentRegister.create({
//         firstname :"chiedozie",
//         lastname:"nwosu",
//         email:"dozie.come",
//         password:"doings",
//         fieldOfInterest:["Medicine", "Kung fu", "Programming", "Money ways"],
//         graduation:[ 
//             {    
//                 status:"somehow",
//                 schoolName:"somehow",
//                 startYear:"somehow",
//                 degree:"somehow",
//                 gpa:"E dey",
//                 gpaScale:"E dey"
//             }]
//         })
// console.log("saved" + student);
//     return res.send("him");
// })

// setting cors
const whiteList = ["http://localhost:3000","http://localhost:3001"]
const corsOption = {
    origin : whiteList,
    credentials : true
}

// Using general middlewares
app.use(helmet())
app.use(cors(corsOption))
app.use(express.json())
app.use(express.urlencoded({extended : false}))


// Using routes
app.use(signInRoute)
app.use(signUpRoute)

// Database connection and starting the server
const PORT = process.env.PORT
const SERVER = "localhost";
dbConnect().then(() => {
  app.listen(PORT, SERVER, () => {
    console.log(`Server running on http://${SERVER}:${PORT}`);
  });
});
