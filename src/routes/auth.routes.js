const express = require('express');
const passport = require('passport');

const router = express.Router();

router.get('/google',
    passport.authenticate('google', { scope: ['email', 'profile'] }));

router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/failed', successRedirect: '/home' }));

router.get('/facebook', passport.authenticate('facebook'))

router.get('/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/failed' }), (req, res) => {
    res.redirect('/home')
})

module.exports = router;