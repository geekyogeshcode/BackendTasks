const express=require('express')
const cors=require('cors')
const routers=require('./router/createUser')

const app=express()

app.use(cors())
app.use(express.json()) 



app.use('/api',routers)



app.listen(5000)


