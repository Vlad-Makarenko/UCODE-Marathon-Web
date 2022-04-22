const express = require('express');
const router = express.Router();
const File = require('./File.js');
const FileList = require('./FileList.js');
const fileList = new FileList();

router.get('/', function(req, res) {
    if(fileList.hasFiles()){
        return res.render('index', {list: JSON.stringify(fileList.getList())} );
    }
    res.render('index');
});


router.get('/:file', function(req, res) {
    const file = new File(req.params.file);
    res.render('index', {
        list: JSON.stringify(fileList.getList()), 
        filename: file.name, 
        content: file.read() 
    });
});

router.post('/', function(req, res) {
    const action = req.body.action;
    if (action == 'Create file'){
        const file = new File(req.body.Filename);
        file.write(req.body.Content);
        return res.render('index', {list: JSON.stringify(fileList.getList())} );
    }  
});

router.post('/:file', function(req, res) {
    const action = req.body.action;
    if( action == 'Delete file'){
        const file = new File(req.params.file);
        file.delete();
        return res.render('index', {list: JSON.stringify(fileList.getList())} );
    }
    
});



module.exports = router;
