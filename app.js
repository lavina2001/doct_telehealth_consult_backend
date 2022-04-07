const express=require('express');
const dotenv=require('dotenv')
const home=require('./router/home')
const user=require('./router/user')
const specialities=require('./router/specialities')
const userDoctor=require('./router/userdoctor')
const admin=require('./router/admin')

const path=require('path')
const hbs=require('hbs')
const cookieParser=require('cookie-parser')
require('./db/db')
const app=express();

dotenv.config()
// app.set('view engine', 'hbs')
app.set("view engine","hbs")
app.use(express.static('public'))
// app.set('views', path.join(__dirname,'/views'))
hbs.registerPartials(path.join(__dirname, '/views/partials'))

app.use(express.json()) // for parsing application/json
app.use(cookieParser())
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use('/',home)
app.use('/',user)
app.use('/',userDoctor)
app.use('/',specialities)
app.use('/admin',admin)


const port=8080||process.env.PORT
app.listen(port,()=>{
    console.log(`api runnig on ${port}`)
})