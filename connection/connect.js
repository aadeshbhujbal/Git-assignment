const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/node')
.then(console.log("Login successful"))
.catch(console.error);
// .finally(()=> mongoose.disconnect());
