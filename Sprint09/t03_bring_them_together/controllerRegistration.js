const express = require('express');
const router = express.Router();
const {checkNotAuthenticated} = require('./check');
const User = require('./models/user');
const bcrypt = require('bcrypt');

router.get('/', checkNotAuthenticated, async (req, res) => {
    res.render('register');
})

router.post('/', checkNotAuthenticated, async (req, res) => {
    const userByLogin = await new User().findBy('login', req.body.login);
    const userByEmail = await new User().findBy('email', req.body.email);
    if(req.body.password !== req.body.ConfPassword){
        res.render('register', {data: 'Passwords do not match', class: 'error'});
    }else if (userByLogin){
        res.render('register', {data: 'A user with the same login already exists', class: 'error'});
    }else if (userByEmail){
        res.render('register', {data: 'A user with the same email already exists', class: 'error'});
    }else {
        const hashPassword = await bcrypt.hash(req.body.password, 10);
        const newUser = new User(req.body.login, hashPassword, req.body.name, req.body.email);
        await newUser.save();
        res.render('login');
    }
})

module.exports = router;
