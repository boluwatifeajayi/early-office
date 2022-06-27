require("dotenv").config();
const express =  require("express");
const dbConnect = require("./middlewares/dbUtil/dbconnect");
const app = express();
const cors = require("cors")
const helmet = require("helmet")


// Requiring routes
const signInRoute = require("./routes/signIn.route")
const signUpRoute = require("./routes/signUp.route")
const profileRoutes = require("./routes/profile/index.profile")


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
app.use(profileRoutes)

app.get("/",(req,res)=>{
  res.json("doneeee")
})
// Database connection and starting the server
const PORT = process.env.PORT
const SERVER = "localhost";
dbConnect().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on http://${SERVER}:${PORT}`);
  });
});
