const {Task} = require("../models")

exports.createTask = async(req,res) =>{

    try{
        const {title,description,created_by} = req.body
        const task = await Task.create({title,description,created_by})

        res.status(201).json({success:true,data:task,message:"Task created succesfully"})
        return;

    }catch(error){
        res.status(500).json({success:false,message:error.message,data:[]})
        return
    }
}

exports.getAllTasks = async(req,res) =>{

    try{

        const task = await Task.findAll()

        res.status(200).json({success:true,data:task,message:"All Task Fetched succesfully"})
        return;

    }catch(error){
        res.status(500).json({success:false,message:error.message,data:[]})
        return
    }
}

exports.updateTask = async(req,res) =>{

    try{
        const {id} = req.params
        const {title,description,update_by,status} = req.body

        const task = await Task.findByPk(id)
        if(!task){
            res.status(404).json({success:false,message:"Task not found",data:[]})
        }
        await task.update({title,description,status,update_by})

        res.status(200).json({success:true,data:task,message:"Task update succesfully"})
        return;

    }catch(error){
        res.status(500).json({success:false,message:error.message,data:[]})
        return
    }
}

exports.deleteTask = async(req,res) =>{

    try{
        const {id} = req.params
        const task = await Task.findByPk(id)
        if(!task){
            res.status(404).json({success:false,message:"Task not found",data:[]})
        }

        await task.destroy();
        res.status(201).json({success:true,data:task,message:"Task deleted succesfully"})
        return;

    }catch(error){
        res.status(500).json({success:false,message:error.message,data:[]})
        return
    }
}