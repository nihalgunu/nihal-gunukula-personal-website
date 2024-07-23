const express = require('express');
const router = express.Router();

router.get('', (req, res) => {
    const locals = {
        title: "Nihal Gunukula",
        description: "Learning more about me."
    };
    res.render('index', { locals, showProfileCard: false });
});

router.get('/about', (req, res) => {
    const locals = {
        title: "About Me",
        description: "About Nihal Gunukula."
    };
    res.render('about', { locals, showProfileCard: true });
});

router.get('/applications', (req, res) => {
    const locals = {
        title: "Applications",
        description: "Nihal Gunukula's Applications."
    };
    res.render('applications', { locals, showProfileCard: true });
});

router.get('/research', (req, res) => {
    const locals = {
        title: "Research",
        description: "Nihal Gunukula's Research."
    };
    res.render('research', { locals, showProfileCard: true });
});

router.get('/resume', (req, res) => {
    const locals = {
        title: "Resume",
        description: "Nihal Gunukula's Resume."
    };
    res.render('resume', { locals, showProfileCard: false });
});

module.exports = router;
