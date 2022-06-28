const studentModel = require("../../models/student.model");

async function updateStudentProfile (req,res){
    try{
        const {id} = res.locals.decodedToken;
        const {firstname, lastname, currentLocation, preferredLanguage, status, fieldOfInterest, graduation, workExperience, reasonToHire, jobAvailability} = req.body;
        console.log("res.locals",res.locals);
        const updatedStudentProfile = await studentModel.findOneAndUpdate({_id : id},
            {
                firstname, 
                lastname, 
                currentLocation, 
                preferredLanguage, 
                status, 
                fieldOfInterest,
                graduation, 
                workExperience, 
                reasonToHire, 
                jobAvailability
            },{
                new : true
            })
            console.log(id)
        return res.json(updatedStudentProfile)
    }catch(error){
        console.log(error.message);
        return res.status(400).json({error:error.message});
    }
}

async function changeStudentPassword (req,res){
    try {
        const { id } = res.locals.decodedToken
        const {password} = req.body

        const updatedStudentProfile = await investmentCompanyModel.findByIdAndUpdate(id, 
        {password},
        { new : true })
        return res.status(200).json(updatedStudentProfile)
    }catch(error){
        return res.status(500).json({error : "Server Error"})
    }
}

module.exports = {
    updateStudentProfile,
    changeStudentPassword
}