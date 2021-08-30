const router = require('express').Router();
const fs = require('fs');
const path = require('path');
const db = require('../../db/db.json');

router.get('/notes', (req, res) => {
    res.json(db);
});

router.post('/notes', (req, res) => {
    db.push(req.body);
    fs.writeFileSync(
        path.join(__dirname, '../../db/db.json'),
        JSON.stringify(db, null, 2)
    );
    res.json(db);
});

router.delete('/notes/:id', (req, res) => {
    db.splice(req.params.id - 1, 1)
    fs.writeFileSync(
        path.join(__dirname, '../../db/db.json'),
        JSON.stringify(db, null, 2)
    );
    res.json(db);
});


module.exports = router