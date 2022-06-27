const mongoose = require('mongoose');

const companySchema = mongoose.Schema({
    firstname:{
        type:String, 
        requried:true
    },
    lastname:{
        type:String, 
        requried:true
    },
    password:{
        type:String, 
        requried:true
    },
    phoneNumber:{
        type:String, 
        requried:true
    },
    orgName:{
        type:String, 
        requried:true
    },
    orgDescription:{
        type:String, 
        required:true
    },
    orgPresence:{
        website:{
            type:String
        },
       socialHandles:[String], 
       officalDocs:{
            type:Buffer
       }
    },
})