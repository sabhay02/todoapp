const express=require("express");
const { createTodoController, getTodoController, deleteTodoController, updateTodoController } = require("../controllers/todoController");
const Authmiddleware = require("../middlewares/Authmiddleware");

const router=express.Router()

router.post("/create",Authmiddleware,   createTodoController)

router.post("/getAll/:userId",Authmiddleware,getTodoController)

router.post("/delete/:id",Authmiddleware,deleteTodoController);

router.patch("/update/:id",Authmiddleware,updateTodoController)

module.exports=router