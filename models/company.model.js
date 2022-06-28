const mongoose = require('mongoose');

const companySchema = mongoose.Schema({
    AdminFirstName:{
        type:String, 
    },

    AdminLastName:{
        type:String, 
    },

    orgEmail : {
        type : String, 
        required:true,
        unique:true
    },

    orgPassword:{
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