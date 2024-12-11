let appfile = require("./app");
let mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/Tour").then((conn)=>{
  console.log("Successfully connected to mongodb");
})
appfile.app.listen(3000,"localhost",()=>{
    console.log("Server active on port 3000");
})