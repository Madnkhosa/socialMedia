const mongoose = require("mongoose");
const {
    Schema
} = mongoose;


const commentsSchema = new Schema({
    comment_id: {
        type: Number,
        require: true
    },
    user_id: {
        type: Number,
        require: true
    },
    content: {
        type: String,
        require: true
    },
    User:{
       type: mongoose.Types.ObjectId,
       ref: "User"
    },
})
module.exports = mongoose.model("Comments", commentsSchema);
