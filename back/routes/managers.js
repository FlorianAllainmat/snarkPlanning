const express = require('express');
const router = express.Router();
const connection = require('../db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('config');

router.get('/', (req, res) => {
    connection.query("SELECT * FROM `managers` WHERE 1", (err, result) => {
        if (err) {
            throw err;
        }
        res.send(result);
    })
})

//login managers

router.post('/connect', (req, res) => {
    const name = req.body.name_manager
    connection.query("SELECT * FROM `managers` WHERE name_manager = ?", name, (err, result) => {
        if (err) {
            console.log(err);
        }
        let passwordIsValid = bcrypt.compareSync(req.body.password, result[0].password)
        if (passwordIsValid) {
            const token = jwt.sign({
                sub: result[0].id_managers
            }, config.secret, {
                expiresIn: 86400
            });
            res.send({
                name,
                token
            })
        }

    })
});

// Creation Manager

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