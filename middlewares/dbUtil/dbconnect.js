const mongoose = require("mongoose")

async function dbConnect () {
    try{
        mongoose.connect(process.env.MONGO_URL)
        console.log("Database is running")
    }catch(error){
        console.log(error)
    }
}
module.exports = dbConnect