const express = require("express");
const taskModel = require("../../model/taskModel");
const secureApi = require("../../middleware/secureApi");
const authorization = require("../../middleware/authorization");
const route = express.Router();
var jwt = require('jsonwebtoken');


var token = jwt.sign({ foo: 'bar' }, 'shhhhh');

console.log(token)



//create a todo

route.post("/task", secureApi, authorization, async (req,res)=>{
  const {title , name , description} = req.body;
  try{
    const todo = new taskModel({
        title,
        name,
        description
    })

    
    await todo.save()
     res.status(200).send(todo)
    //  res.json({todo,message:"todo is created"})
  }catch(error){
    console.log(error);
  }
})
//get all todo

route.get("/get", secureApi, authorization, async(req,res)=>{
  try{
     const getTodos = await taskModel.find().select("name title -_id")
     res.send(getTodos)
    
  }catch(error){
    console.log(error)
  }
})
//get one todo

route.get("/get/:id", secureApi, authorization, async(req,res)=>{
  try{
     const getSingleTodo = await taskModel.findById(req.params.id)
     res.send(getSingleTodo)
    
  }catch(error){
    console.log(error)
  }
})

//put update todos

route.put("/update", secureApi, authorization, async(req,res)=>{
  try{
     const getUpdate = await taskModel.updateMany(
      {
      name:"sojib"
      }
     )
     res.send(getUpdate)
    
  }catch(error){
    console.log(error)
  }
})

//update

route.put("/update/:id", secureApi, authorization, async(req,res)=>{
  try{
     const getUpdateTodo = await taskModel.findByIdAndUpdate(req.params.id,req.body,{new:true})
     await getUpdateTodo.save()
     res.send(getUpdateTodo)
    
  }catch(error){
    console.log(error)
  }
})

//delete todo

route.delete("/delete", secureApi, authorization, async(req,res)=>{
  try{
     const DeleteTodo = await taskModel.deleteMany( {
      title: "mern345",
      name: "stack"
     })
    
     res.send(DeleteTodo)
    
  }catch(error){
    console.log(error)
  }
})

route.delete("/delete/:id", secureApi, authorization, async(req,res)=>{
  try{
     const getDeleteTodo = await taskModel.findByIdAndDelete(req.params.id)
     await getDeleteTodo.save()
     res.send(getDeleteTodo)
    
  }catch(error){
    console.log(error)
  }
})

module.exports = route;