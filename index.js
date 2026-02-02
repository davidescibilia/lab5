const cors = require("cors");
const express = require("express");
const app= express();
app.use(cors());
const port = 3000;

app.get("/", (req,res) => {
    const uno = {
         "message": "hello world from Server",

    }
    res.send(uno);
});

app.listen(port, ()=>{
    console.log('server listening on port ${port}');
});