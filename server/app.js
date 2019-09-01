const express = require('express');
const app=express();
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

const PostData=require('./routes/PostData'); 

//Middleware
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('We are on home!')
});

//get history 
app.get('/post', async (req, res)=>{
    try{
        const post=await PostData.find();
        res.json(post);
    }catch(err){
        res.json({message:err});
    }
});

//submit post
app.post('/post', (req,res)=>{
    const post= new PostData({
        countShoe: req.body.countShoe,
        countShirt: req.body.countShirt
    });

    post.save()
    .then( data=>{
        res.json({data});
    })
    .catch(err=>{
        res.json({message: err});
    });
});

//connect to DB
mongoose.connect(
    process.env.DB_CONNECTION,
    {useNewUrlParser: true},
    () => {
    console.log('connected to mongoose DB!!');
    }
);

//listen to server
app.listen(5000);