require('dotenv').config()

const express=require('express')
const app=express();
// const ejs_lint=require('ejs-lint')
const ejs=require('ejs');
const expressLayout=require('express-ejs-layouts')
const path=require('path');
const mongoose=require('mongoose')
const session=require('express-session')
const flash=require('express-flash')
const MongodbStore=require('connect-mongo')
const { env } = require('process');
const { minify } = require('laravel-mix');
const { connect } = require('http2');
const PORT=process.env.PORT || 3000
//database connection
const url='mongodb://localhost/Sizzlo';

mongoose.connect(url,{useNewUrlParser: true,useUnifiedTopology: true});

const connection=mongoose.connection;

connection.once('open',()=>{
    console.log('Database connected...');
}) .on('error', function (err) {
    console.log('connection failed...');
});




let store = new MongodbStore({
    mongoUrl: url,
    collection: "sessions"
 });

//session config

app.use(session({
    secret: process.env.COOKIE_SECRET,
    resave: false,
    store: store,
    saveUninitialized: false,
    cookie: { maxAge: 1000 * 60 * 60 * 24 }, // 24 hours
  }));

app.use(flash())
app.use(express.json()) 
// app.get('/public', express.static('public'));

//session store
app.use((req,res,next)=>{
    res.locals.session=req.session
    next()
})

app.use(express.static(__dirname));
app.use(express.urlencoded({extended: false}))
app.use(express.static('public'));   
app.use(expressLayout)
app.set('views',path.join(__dirname,'/resources/views'))
app.set('view engine','ejs')

require('./routes/web')(app)

app.listen(PORT,()=> {
    console.log(`Listening on port ${PORT}`)
})


// app.get("/login", (req, res) => {
//     console.log(__dirname)
// });