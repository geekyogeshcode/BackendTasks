const express=require('express')
const cors=require('cors')
const axios=require('axios')
const mongoose=require('mongoose')

const app=express()

app.use(cors())
app.use(express.json()) 

mongoose.connect('mongodb://localhost:27017/WithoutMVC')
    .then(() => console.log("Mongodb Connected") )
    .catch(() => console.log('Mongodb Connection Error') )

const userSchema= mongoose.Schema({
    userID:String,
    password:String
})    

const userModel=mongoose.model("User1",userSchema)

app.get('/',(req,res) =>{
    res.send('Hello World yo yo')
})


app.post('/profile',async(req,res) =>{
    const newUser=new userModel({userID:"YogeshKarware",password:"999999"})
    await newUser.save()
    res.status(200).json(newUser) 
})



app.listen(5000)


