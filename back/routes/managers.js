const express = require('express');
const router = express.Router();
const connection = require('../db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

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
    connection.query("SELECT * FROM `managers` WHERE 1", (err, result) => {
        if (err) {
            throw err;
        }
        console.log(result)
            const user = result.find(us => us.name_manager === req.body.name_manager);
            console.log(user)
            if (user) {
                const token = jwt.sign({
                    sub: user.id
                }, "secretOrkey");
                const {
                    password,
                    ...userwithoutPassword
                } = user;
                res.send({
                    ...userwithoutPassword,
                    token
                })
            }
    })
});

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