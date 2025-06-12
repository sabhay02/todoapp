const express=require("express")
const { testcontrolling } = require("../controllers/testController")

const router=express.Router()

router.get("/",testcontrolling)

module.exports=router