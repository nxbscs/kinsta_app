const express=require('express');
const cors=require('cors');


const app=express();
const port=4000;

app.get('/',(req,res)=>{
    res.send('Hello there');
});

app.listen(port,()=>{
    console.log(`Server listening on https://localhost:${port}`);
});