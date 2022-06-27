const express= require('express')
const { addEmp, getEmp, deleteEmp, getOneEmp, updateEmp } = require('../controller/empController')
const router = express.Router()
const multer= require("multer");
const path = require('path');

// const storage= multer.diskStorage({
//     destination: (req, file, cb) =>{
//       cb(null , 'uploads')
//     },
//     filename: (req, file , cb)=>{
//       cb(null, "image" + Date.now() + path.extname(file.originalname) )
//     }
  
//   })
//   const upload = multer({storage: storage});
  
  
  

router.route("/").post(addEmp)
router.route('/:id').delete(deleteEmp).get(getOneEmp).put(updateEmp)

module.exports= router;