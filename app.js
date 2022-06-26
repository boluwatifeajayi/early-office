require("dotenv").config();

const express =  require("express");
const dbConnect = require("./middlewares/dbUtil/dbconnect");
const app = express();

app.get("/", (req, res)=>{
    return res.send("him");
})



const PORT = process.env.PORT
const SERVER = "localhost";
dbConnect().then(()=>{
    app.listen(PORT, SERVER, ()=>{
        console.log(`Server running on http://${SERVER}:${PORT}`);
    })
})

