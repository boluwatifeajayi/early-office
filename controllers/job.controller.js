const jobs = require("")
const createJob = (req, res, next) =>{
    const {
        Role,
        jobResponsibility,
        jobType,
        NumberOfOpenings,
        companyId,
        SkillsNeeded,
        salary,
        duration,
        location} = req.body;
    
}