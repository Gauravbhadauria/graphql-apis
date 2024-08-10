const mongoose=require("mongoose")
const UserSchema={
    name:String,
    email:String,
    age:Number,
    address:String
}

module.exports=mongoose.model('User',UserSchema)