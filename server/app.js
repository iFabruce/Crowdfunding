const express = require('express');
const app = express();
const cors = require('cors');
const baseRoute = require('./routes/baseRoute');

app.use(cors());
app.use(express.json());

const file = require('./fichier')
const fs = require('fs')

const olona ={
    "nom":"Kiwi",
    "age": 12
} 
file.push(olona)
fs.writeFile('./fichier.json',JSON.stringify(file),err => {
    if(err) console.log(err);
    console.log("Done");
})

app.listen(5000, () => {
    console.log("connected")
})



// app.use(baseRoute);