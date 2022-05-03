const express = require('express');
const router = express.Router();
const User = require('./models/user');
const { checkNotAuthenticated} = require('./check');
const main = require('./mailer');
const generator = require('generate-password');
const bcrypt = require('bcrypt');

router.get('/', checkNotAuthenticated, (req, res) => {
    res.render('reminder');
})

router.post('/', checkNotAuthenticated, async (req, res) => {
    const user = await new User().findBy('email', req.body.email);
    if(user) {
        const newPassword = await generator.generate({numbers: true});
        user.password = bcrypt.hashSync(newPassword, 10);
        main(user, newPassword);
        user.save();
        res.render('reminder', {class: 'success', message: 'New password sent to your email'});
    } else {
        res.render('reminder', {class: 'error', message: 'No user with that email'});
    }
})

module.exports = router;
