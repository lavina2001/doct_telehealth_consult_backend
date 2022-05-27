const express=require('express');
const dotenv=require('dotenv')
const home=require('./router/home')
const user=require('./router/user')
const specialities=require('./router/specialities')
const userDoctor=require('./router/userdoctor')
const admin=require('./router/admin')
const diseases=require('./router/diseases')
const feedback=require('./router/feedback')
 const getfeedback=require('./router/getfeedback')
// let path = require( 'path' );


let app = express();
let server = require( 'http' ).Server( app );
let io = require( 'socket.io' )( server );
let stream = require( './ws/stream' );
let favicon = require( 'serve-favicon' );

const path=require('path')
const hbs=require('hbs')
const cookieParser=require('cookie-parser')
const mongo = require('./db/db')



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
app.use('/dashboard',userDoctor)
app.use('/',specialities)
app.use('/admin',admin)
app.use('/diseases',diseases)
app.use('/feedback',feedback)
 app.use('/getfeedback',getfeedback)
//streaming


app.use( favicon( path.join( __dirname, 'favicon.ico' ) ) );
app.use( '/assets', express.static( path.join( __dirname, '/assets' ) ) );

app.get( '/streaming', ( req, res ) => {
    console.log("sdsdsadsadsadsadsadsadsadsaas");
    res.sendFile( __dirname + '/index.html' );
} );


io.of( '/stream' ).on( 'connection', stream );


const port=8080||process.env.PORT

server.listen(8080)

// app.listen(port,()=>{
//     console.log(`api runnig on ${port}`)
// })








// const express=require('express');
// const dotenv=require('dotenv')
// const home=require('./router/home')
// const user=require('./router/user')
// const specialities=require('./router/specialities')
// const userDoctor=require('./router/userdoctor')
// const admin=require('./router/admin')
// const diseases=require('./router/diseases')
// const feedback=require('./router/feedback')
// // let path = require( 'path' );


// let app = express();
// let server = require( 'http' ).Server( app );
// let io = require( 'socket.io' )( server );
// let stream = require( './ws/stream' );


// const path=require('path')
// const hbs=require('hbs')
// const cookieParser=require('cookie-parser')
// require('./db/db')



// dotenv.config()
// // app.set('view engine', 'hbs')
// app.set("view engine","hbs")
// app.use(express.static('public'))
// // app.set('views', path.join(__dirname,'/views'))
// hbs.registerPartials(path.join(__dirname, '/views/partials'))

// app.use(express.json()) // for parsing application/json
// app.use(cookieParser())
// app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
// app.use('/',home)
// app.use('/',user)
// app.use('/dashboard',userDoctor)
// app.use('/',specialities)
// app.use('/admin',admin)
// app.use('/diseases',diseases)
// app.use('/feedback',feedback)

// //streaming
// app.use( '/assets', express.static( path.join( __dirname, '/assets' ) ) );

// app.get( '/streaming', ( req, res ) => {
//     res.sendFile( __dirname + '/index.html' );
// } );


// io.of( '/stream' ).on( 'connection', stream );


// const port=8080||process.env.PORT
// app.listen(port,()=>{
//     console.log(`api runnig on ${port}`)
// })