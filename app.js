const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req, res) =>{
    res.sendFile((__dirname + '/views/home.html'));
});

app.listen(3002, () => {
    console.log("servidor corriendo");
});