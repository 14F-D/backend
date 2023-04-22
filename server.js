const express = require('express');
const cors = require('cors');
const session = require('express-session');
const crypto = require('crypto');
const cookieParser = require('cookie-parser');


const corsOptions = {
    origin:['https://14f-dbudget.netlify.app','http://localhost:5173','http://127.0.0.1:5173','http://192.168.1.122:5173'],
    credentials: true,
    methods: "GET, POST, PUT, DELETE",
    exposedHeaders:['set-cookie'],
}


const app = express();

app.use(cors(corsOptions))
app.use(express.json()); 
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());



app.use(session({
    name: "userSession",
    secret: crypto.randomBytes(20).toString('hex') ,
    resave: true,
    saveUninitialized: false,
    unset: "destroy",
    cookie: { secure:'auto', maxAge: 600000,sameSite:'lax'},
    rolling: true
}));

app.get('/',(req,res)=>{
    res.json({
        message:'ok',
    })
});

require('./routes/routes')(app);

const port = 3000;
app.listen(port,()=>{
    console.log(`Server is running http://localhost:${port}`)
});