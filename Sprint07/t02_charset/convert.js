const express = require('express');
const router = express.Router();
const iconv = require('iconv-lite');

router.get('/', function(req, res) {
    res.render('index');
});



router.post('/', function(req, res) {
    const action = req.body.action;
    if(action == 'Change charset'){
        const inputStr = req.body.inputStr;
        const selected = req.body.SelectedCharset;
        let arr = {};
        if(typeof(req.body.SelectedCharset) == 'object'){
            for (let index = 0; index < selected.length; index++) {
                arr[`${selected[index]}`] = selected[index].toString();
            }
        } else {
            arr[`${selected}`] = selected;
        }

        let obj = { inputStr };
        if ('UTF-8' in arr){
            obj['utf'] =  iconv.encode(inputStr, 'UTF-8').toString();
        }
        if ('ISO-8859-1' in arr){
            obj['iso'] = iconv.encode(inputStr, 'ISO-8859-1').toString();
        }
        if ('Windows-1252' in arr){
            obj['win'] = iconv.encode(inputStr, 'Windows-1252').toString();
        }
        res.render('index', obj );
    }else {
        res.render('index');
    }
});


module.exports = router;
