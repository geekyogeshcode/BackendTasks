const express=require('express')
const router=express.Router()
const userModel=require('../models/userModel')


router.get('/home',(req,res) =>{
    res.send('Hello World yo yo')
})


router.post('/profile',async(req,res) =>{
    const newUser=new userModel({userID:"YogeshKarware",password:"999999"})
    await newUser.save()
    res.status(200).json(newUser) 
})

module.exports= router