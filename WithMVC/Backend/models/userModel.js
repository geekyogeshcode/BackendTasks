const mongoose=require('mongoose')

mongoose.connect('mongodb://localhost:27017/WithMVC')
    .then(() => console.log("Mongodb Connected") )
    .catch(() => console.log('Mongodb Connection Error') )

const userSchema= mongoose.Schema({
    userID:String,
    password:String
})    

const userModel=mongoose.model("User1",userSchema)

module.exports =userModel 