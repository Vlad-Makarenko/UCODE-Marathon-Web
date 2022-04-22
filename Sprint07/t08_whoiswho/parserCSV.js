const express = require('express')
const fs = require('fs');
const csv = require('csv-parser');
const router = express.Router();
let results = [];


router.post('/', (req, res) => {
    const path = req.body.inputFile;
    results = [];
    if(path != ''){
        fs.createReadStream(path)
        .pipe(csv())
        .on('data', (data) => results.push(data))
        .on('end', () => {
            res.render('index');
            // console.log(results);
        });
    } else {
        res.render('index');
    }

})

router.get('/getTable', (req, res) => {
    if(results.length > 0){
        res.json({results});
    }else {
        res.json({results: 'No Data'});
    }
});



module.exports = router;