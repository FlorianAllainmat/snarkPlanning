const express = require('express');
const router = express.Router();
const connection = require('../db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//List Member
router.get('/', (req, res) => {
    connection.query("SELECT * FROM `collaboraters` WHERE 1", (err, result) => {
        if (err) {
            throw err;
        }
        res.send(result);
    })
})

//Login Member

//Creation Member
router.post('/create', (req, res) => {
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
router.delete('/:id', (req, res) => {
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