const express = require('express');

const app = express();

const PORT = process.env.PORT || 8080;


app.get('/', (req, res) => {
    res.end("Hello");
});

app.listen(PORT, () => console.log("Server has been started"));
