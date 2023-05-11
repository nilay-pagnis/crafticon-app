import express from 'express'
import data from './data.js';

const app = express();

app.get('/api/products', (req,res)=>{
    res.send(data.products);
});

app.listen(5000, ()=>{
    console.log(`running at 5000`)
});