const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const User = require("../models/users")

router.use(bodyParser.json());
//Read the data -- READ OPERATION
router.get("/users",async(req,res)=>{
    //write the code to fetch all the users
    try{
        const users = await User.find();
        res.status(200).json({
            status: "Success",
            data: users
        })

    }catch(e){
        res.status(400).json({
            status: "failed",
            message: e.message
        })

    }
})

//Read specific users data -- READ OPERATION
router.get("/users/:id",async(req,res)=>{
    //write the code to fetch all the users
    try{
        // console.log(req.params);
        const users = await User.find({_id: req.params.id});
        res.status(200).json({
            status: "Success",
            data: users
        })

    }catch(e){
        res.status(400).json({
            status: "failed",
            message: e.message
        })

    }
})

//Create data -- CREATE OPERATION

router.post("/users",async(req,res)=>{
    //write the code to fetch all the users
    try{
        // console.log(req.body);

        // const users = await User.create({
        //     name: req.body.name,
        //     email: req.body.email,
        //     age: req.body.age,
        //     skills: req.body.skills

        // });

        const users = await User.create(req.body);

        res.status(200).json({
            status: "Success",
            users
        })

    }catch(e){
        res.status(400).json({
            status: "failed",
            message: e.message
        })

    }
})

// Update date -- UPDATE OPERATION 

router.put("/users/:id",async(req,res)=>{
    try{
    
        //Code to update the document    
        const users = await User.updateOne({_id: req.params.id}, req.body);

        res.status(200).json({
            status: "Success",
            users
        })

    }catch(e){
        res.status(400).json({
            status: "failed",
            message: e.message
        })

    }
})

// Delete data -- DELETE OPERATION

router.delete("/users/:id",async(req,res)=>{
    try{
    
        //Code to update the document    
        const users = await User.deleteOne({_id: req.params.id});

        res.status(200).json({
            status: "Success",
            users
        })

    }catch(e){
        res.status(400).json({
            status: "failed",
            message: e.message
        })

    }
})

router.get("*", (req,res)=>{
    res.status(404).json({
        status: "failed",
        message: "Invalid request"
    });
})

module.exports = router;