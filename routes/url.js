const express = require('express');
const router = express.Router();

const URLs = require('../../models/urls');

router.get('/test', (req, res) => res.send('url route testing'));

router.get('/', (req, res) =>{
    console.log('api executed')
    // URLs.find()
    // .then(url => res.json(url))
    // .catch(err => res.status(404).json({nourlsfound: 'No urls found'}))
});
router.post('/generateShortURL', (req, res) =>{
    // URLs.create(req.body)
    // .then(url => res.json({msg: 'long URL added succesfully'}))
    // .catch(err => res.status(400).json({error: 'Unable to add long URL'}));
    console.log('Hello generate reach')
});
router.post('/redirect/:shortCode', (req, res) =>{
    URLs.create(req.body)
    .then(url => res.json({msg: 'long URL added succesfully'}))
    .catch(err => res.status(400).json({error: 'Unable to add long URL'}));
});

module.exports = router;