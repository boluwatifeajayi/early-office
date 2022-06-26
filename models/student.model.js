const mongoose = require('mongoose')

const studentSchema = mongoose.Schema({
    firstname : {
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:String,
        required:true
    }, 
    currentLocation:{
        type:String,
        required:true
    },
    preferredLanguage:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
    },
    fieldOfInterest:{
        type:[String],
        required:true
    },
    graduation:[ 
    {    
        status:{
            type:String,
            required:true
        },
        schoolName:{
            type:String,
            required:true
        },
        startYear:{
            type:String,
            required:true
        },
        degree:{
            type:String,
            required:true
        },
        gpa:{
            type:String,
        },
        gpaScale:{
            type:String,
        }
    }]
    // workExperience:[
    // { 
    //     company:{
    //         type:String,
    //     },
    //     jobTitle:{
    //         type:String,
    //     },
    //     certification:{
    //         type:String,
    //     },
    //     company:{
    //         type:String,
    //     },
    //     company:{
    //         type:String,
    //     },
    // }]
})


module.exports = mongoose.model('student',studentSchema)