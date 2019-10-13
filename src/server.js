const express = require('express');
const app = express();
const path = require('path');

app.get('/', function(req, res) {
    res.sendFile(path.resolve(__dirname, '../index.html'));
});

const port = process.env.PORT || 4000
app.listen(port, function(){
    console.log(`Your node js server is running on ${port} `);
});