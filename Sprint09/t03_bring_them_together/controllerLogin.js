const express = require('express');
const router = express.Router();
const passport = require('passport');
const { checkNotAuthenticated} = require('./check');

router.get('/', checkNotAuthenticated, (req, res) => {
    res.render('login');
})

router.post('/', checkNotAuthenticated, passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
}))

router.delete('/', (req, res) => {
    req.logOut();
    res.redirect('/login');
})

module.exports = router;
