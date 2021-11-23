const express=require('express');
const dotenv=require('dotenv')
const user=require('./router/user')
const specialities=require('./router/specialities')
const userDoctor=require('./router/user.doctor')
require('./db/db')
const app=express();
dotenv.config()
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use('/user',user)
app.use('/doctor',userDoctor)
app.use('/specialities',specialities)



app.listen(3000,()=>{
    console.log(`api runnig on ${3000}`)
})