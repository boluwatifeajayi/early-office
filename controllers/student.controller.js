const students = require("../models/student.model");
async function getStudents(req, res) {
  try {
    const allStudents = await students.find();
    res.status(200).json(allStudents);
  } catch (error) {
    res.status(404).json({ error: "No students available" });
  }
}

async function getStudentById(req, res) {
  const id = req.params.id;
  try {
    const oneStudent = await students.findById(id);
    res.status(200).json(oneStudent);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
}

async function getStudentByLocation(req, res) {
  const { location } = req.body;
  try {
    const commonLocation = await students.find({ location });
    res.status(200).json(commonLocation);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
}

async function getStudentByInterest(req, res) {
  const { interest } = req.body;
  try {
    const commonInterests = await students.find({ interest });
    res.status(200).json(commonInterests);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
}

module.exports = {
  getStudents,
  getStudentById,
  getStudentByLocation,
  getStudentByInterest,
};
