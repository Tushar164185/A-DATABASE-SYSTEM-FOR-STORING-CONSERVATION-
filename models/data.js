const mongoose = require('mongoose');
const chatSchema = new mongoose.Schema({
    from : {
        type : String
    },
    to : {
        type : String
    },
    date : {
        type : Number
    },
    message : {
        type : String
    }
})
const data = new mongoose.model("data",chatSchema);
module.exports= data;
