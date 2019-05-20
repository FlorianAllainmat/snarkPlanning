const express = require('express');
const router = express.Router();
const connection = require('../db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


//login managers


router.get('/', (req, res) => {
    connection.query("SELECT * FROM `managers` WHERE 1", (err, result) => {
        if (err) {
            throw err;
        }
        res.send(result);
    })
})

// Creation Member

router.post('/create', (req, res) => {
    const newManager = req.body;
    const data = {
        ...newManager,
        password: bcrypt.hashSync(newManager.password, 10),
    };
    connection.query('INSERT INTO managers SET ?', data, (err) => {
        if (err) {
            res.sendStatus(500);
        }
        res.sendStatus(200);
    });
});

module.exports = router; 