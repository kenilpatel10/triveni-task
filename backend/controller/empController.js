const asyncHandler = require("express-async-handler");
const EMP = require("../models/employee");

const addEmp = asyncHandler(async (req, res) => {
  const emp = await EMP.create({Photo: req.file.path});

  res.status(200).json({
    emp,
  });
});

const getEmp = asyncHandler(async (req, res) => {
  const emp = await EMP.find();

  res.status(200).json({
    emp,
  });
});

const deleteEmp = asyncHandler(async (req, res) => {
  const emp = await EMP.findByIdAndRemove(req.params.id);

  res.status(200).json({
    emp,
  });
});

const getOneEmp = asyncHandler(async (req, res) => {
  const emp = await EMP.findById(req.params.id);

  res.status(200).json({
    emp,
  });
});


const updateEmp = asyncHandler(async (req, res) => {
    const emp = await EMP.findByIdAndUpdate(req.params.id, req.body,{
        new : true,
    });
  
    res.status(200).json({
      emp,
    });
  });
module.exports = { addEmp, getEmp, deleteEmp, getOneEmp,updateEmp };
