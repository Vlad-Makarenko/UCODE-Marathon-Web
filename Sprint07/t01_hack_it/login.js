const express = require('express');
const router = express.Router();
const hashFunc = require('./hashFunc');
var user;

router.get('/', function(req, res) {
    if(req.session.authenticated){
      res.render('initialized', {hash: `${req.session.user.hash}`});
    }else{
      res.render('index');
    }
});



router.post('/', function(req, res) {
    const action = req.body.action;
    if(action == 'Save'){
      const { password, salt } = req.body;
      const hash = hashFunc(password, salt);
      req.session.authenticated = true;
      req.session.user = {
        salt: salt, 
        hash: hash
      }
      user = req.session.user;
      res.render('initialized', {hash: `${req.session.user.hash}`});
    }else if (action == 'Clear'){
      req.session.authenticated = false;
      req.session.user = null;
      res.render('index');
    }else if (action == 'Check password'){
      const { password } = req.body;
      req.session.user = user;
    //   console.log(`\n\nSALT: ${req.session.user.salt}\n\nHASH: ${req.session.user.hash}\n\nhashFunc: ${hashFunc(password, req.session.user.salt )}\n\n`)
      if(hashFunc(password, req.session.user.salt ) == req.session.user.hash){
          res.render('index', {info: 'Hacked!'})
      } else {
          
          res.render('initialized', {info: 'Access denied!!', hash: `${req.session.user.hash}`})
      }
      
    }
});


module.exports = router;
