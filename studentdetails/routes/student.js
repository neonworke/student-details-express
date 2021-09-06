const express = require("express");
const fs = require("fs");
const router = express.Router();

router.post("/", function(req, res) {
    res.send({result:"success"});
});

router.post("/add", function(req, res) {
    res.send({ result:"success"});
    const jsData = JSON.stringify(req.body);
    //console.log("JSON Data", jsdata);
    fs.writeFile("./data.json",jsData , err => {
        if (err) {
            console.log('Error writing file', err);
        } else {
            console.log('Successfully wrote file');
        }
    });
});

let fileData = fs.readFile('./data.json', (err, data) => {
    if (err) throw err;
    let studentDetail = JSON.parse(data);
    console.log(studentDetail);
    router.get("/getDetails", function(req, res, next) { 
        res.send(studentDetail);
      });
});


module.exports = router;