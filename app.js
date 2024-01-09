const express = require ('express');
const app = express();
const path = require('path');

const port = 5000;


//Product
app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, 'product.html'));
})

app.get('/file', (req,res)=>{
    res.download(path.join(__dirname, 'sample.txt'));
})



app.listen(port, () => {
    console.log(`App listening on Port ${port}`)
})