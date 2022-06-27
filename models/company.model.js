const mongoose = require('mongoose');

const companySchema = mongoose.Schema({
    firstname:{
        type:String, 
    },
    lastname:{
        type:String, 
    },
    password:{
        type:String, 
    },
    phoneNumber:{
        type:String, 
    },
    orgName:{
        type:String, 
    },
    orgDescription:{
        type:String, 
    },
    orgPresence:{
        website:{
            type:String
        },
       socialHandles:[Object], 
       officalDocs:{
            type:String
       }
    },

},{timestamps : true});

const companyModel = mongoose.model("company", companySchema);
module.exports = companyModel;