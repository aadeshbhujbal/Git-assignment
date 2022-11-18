const express = require("express");
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bodyParser = require("body-parser");
const Post = require("../models/posts");
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const secret = "RESTAPI";

router.post("/posts",async (req, res)=>{
    const posts = await Post.create({
        title: req.body.title,
        body: req.body.body,
        user: req.user

    });
    res.json({
        status: "success",
        posts
    })
});

router.get("/posts",async (req, res)=>{
    const posts = await Post.find();
    res.json({
        status: "success",
        posts
    })
})
module.exports = router;