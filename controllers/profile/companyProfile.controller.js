const companyModel = require("../../models/company.model");

async function updateCompanyProfile (req,res){
    try{
        const {id} = res.locals.decodedToken;
        const {
            AdminFirstName,
            AdminLastName,
            orgDescription,
            orgPresence
        } = req.body;

        const updatedCompanyProfile = await companyModel.findOneAndUpdate({_id : id},
            {
                AdminFirstName,
                AdminLastName,
                orgDescription,
                orgPresence,
            },{
                new : true
            })
        return res.json(updatedCompanyProfile)
    }catch(error){
        console.log(error.message);
        return res.status(400).json({error:error.message});
    }
}

async function changeCompanyPassword (req,res){
    try {
        const { id } = res.locals.decodedToken
        const {orgPassword} = req.body

        const updatedCompanyProfile = await companyModel.findByIdAndUpdate(id, 
        {orgPassword},
        { new : true })
        return res.status(200).json(updatedCompanyProfile)
    }catch(error){
        return res.status(500).json({error : "Server Error"})
    }
}

module.exports = {
    updateCompanyProfile,
    changeCompanyPassword
}