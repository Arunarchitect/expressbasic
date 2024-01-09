const express = require ('express');
const app = express();
const path = require('path');

const port = 5000;


app.use(express.static('public'))

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'index.html'));
})

//Product
app.get('/product/:category/:brand', (req,res)=>{
    const {category} = req.params;
    const {brand} = req.params;

    res.send(`Product: ${category} and Brand:${brand}`);
     
})

//Product
app.get('/product', (req,res)=>{
    res.sendFile(path.join(__dirname, 'product.html'));
})


//About
app.get('/about', (req,res)=>{
    res.sendFile(path.join(__dirname, 'about.html'));
})

//Home
app.get('/contact', (req,res)=>{
    res.sendFile(path.join(__dirname, 'contact.html'));
})

app.listen(port, () => {
    console.log(`App listening on Port ${port}`)
})