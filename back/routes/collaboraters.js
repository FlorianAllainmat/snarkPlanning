const express = require('express');
const connection = require('../db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const isAuth = require('../helpers/auth');
const config = require('config')

const router = express.Router();

//List Member
router.get('/', isAuth, (req, res) => {
    connection.query("SELECT * FROM `collaboraters` WHERE 1", (err, result) => {
        if (err) {
            throw err;
        }
        res.send(result);
    })
})

//Login Member
router.post('/connect', (req, res) => {
    const name = req.body.name_collaboraters
    connection.query("SELECT * FROM `collaboraters` WHERE name_collaboraters = ?", name, (err, result) => {
        if (err) {
            console.log(err);
        }
        let passwordIsValid = bcrypt.compareSync(req.body.password, result[0].password)
        if (passwordIsValid) {
            const token = jwt.sign({
                sub: result[0].id_collaboraters
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

//Creation Member
router.post('/create', isAuth, (req, res) => {
    const newCollaborater = req.body;
    const data = {
        ...newCollaborater,
        password: bcrypt.hashSync(newCollaborater.password, 10),
    };
    connection.query('INSERT INTO collaboraters SET ?', data, (err) => {
        if (err) {
            res.sendStatus(500);
        }
        connection.query("SELECT * FROM `collaboraters` WHERE 1", (err, result) => {
            if (err) {
                throw err;
            }
            res.send(result);
        })
    });
});

//Delete Member
router.delete('/:id', isAuth, (req, res) => {
    const idCollaborater = req.params.id;
    connection.query('DELETE FROM collaboraters WHERE id_collaboraters = ?', [idCollaborater], (err) => {
        if (err) {
            res.sendStatus(500);
        } else {
            connection.query("SELECT * FROM `collaboraters` WHERE 1", (err, result) => {
                if (err) {
                    throw err;
                }
                res.send(result);
            })
        }
    });
});

module.exports = router;