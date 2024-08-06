const mongoose = require ("mongoose");
const { Schema } = mongoose;
const UserSchema = new Schema({
    fullname:{
        type: String,
        required: true,
    },
    user_id:{
       type: Number,
       unique: true,
    },
    email:{
    type: String,
    unique: true
    },
   
    password_hash:{
           type: String,
           unique: true,
    },

});

module.exports = mongoose.model("User", UserSchema);












