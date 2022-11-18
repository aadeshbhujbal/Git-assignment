const express = require("express");
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/node');
const loginRoutes = require("./routes/login")
const userRoutes = require("./routes/user");
const postRoutes = require("./routes/posts");
const connect = require("./connection/connect");
var jwt = require('jsonwebtoken');
const secret = "RESTAPI";

//CRUD --CREATE, READ, UPDATE, DELETE 
const app = express();

app.use("/api/v1/posts", (req, res, next) => {
    if (req.headers.authorization) {
        const token = req.headers.authorization;


        // console.log(token);
        if (token) {
            // verify a token symmetric
            jwt.verify(token, secret, function (err, decoded) {
                req.user = decoded.data
                next();
                // bar
            });



        } else {
            return res.status(403).json({
                status: "failed",
                message: "Invalid token"
            })
        }
    }

})

app.use("/api/v1", loginRoutes);
app.use("/api/v1", userRoutes);
app.use("/api/v1", postRoutes);



app.get("/", (req, res) => {
    res.send("Ok");
})

app.listen(3000, () => console.log("The server is up at 3000 port"))