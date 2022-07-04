const companyModel = require("../models/company.model");

async function getCompanies(req, res) {
  try {
    const allcompany = await companyModel.find();
    res.status(200).json(allcompany);
  } catch (error) {
    res.status(404).json({ error: "No company available" });
  }
}

async function getCompanyById(req, res) {
  const id = req.params.id;
  try {
    const oneCompany = await companyModel.findById(id);
    res.status(200).json(oneCompany);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
}
module.exports = { getCompanyById, getCompanies };
