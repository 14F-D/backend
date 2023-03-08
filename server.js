const express = require('express');
const cors = require('cors');
const session = require('express-session');
const bcryptjs = require('bcryptjs');


const corsOptions = {
    origin:'http://127.0.0.1:5173'
}


const app = express();

app.use(cors(corsOptions))
app.use(express.json()); 
app.use(express.urlencoded({extended:true}));

app.use(session({
    secret: 'secretKey',
    resave: true,
    saveUninitialized: true
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