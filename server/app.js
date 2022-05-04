const express = require('express');
const app = express();
const cors = require('cors');
const baseRoute = require('./routes/baseRoute');

app.use(cors());
app.use(express.json());


app.listen(5000, () => {
    console.log("connected")
})

app.use(baseRoute);