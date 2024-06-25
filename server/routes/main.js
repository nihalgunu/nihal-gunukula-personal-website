const express = require('express');
const router = express.Router();

router.get('', (req, res) => {
    const locals = {
        title: "Nihal Gunukula",
        description: "Learning more about me."
    }

    res.render('index', { locals });
});

router.get('/about', (req, res) => {
    res.render('about');
});

router.get('/applications', (req, res) => {
    res.render('applications');
});

router.get('/research', (req, res) => {
    res.render('research');
});

router.get('/resume', (req, res) => {
    res.render('resume');
});

module.exports = router;