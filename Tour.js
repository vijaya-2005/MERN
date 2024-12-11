let mongoose = require("mongoose");
const { type } = require("os");
let tourSchemas = mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name required"]
    },
    total:{
        type:Number,
        required:[true,"Total required"]
    }
});
let tourModel = mongoose.model("Tour",tourSchemas);
module.exports={tourModel};