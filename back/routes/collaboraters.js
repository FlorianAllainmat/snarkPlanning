const express = require('express');
const connection = require('../db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const router = express.Router();

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
router.post('/connect', (req, res) => {
    connection.query("SELECT * FROM `collaboraters` WHERE 1", (err, result) => {
        if (err) {
            throw err;
        }
        const user = result.find(us => us.name_collaboraters === req.body.name_collaboraters);
        if (user) {
            const token = jwt.sign({ sub: user.id },"secretOrkey");
            const { password, ...userwithoutPassword } = user;
            res.send({
                ...userwithoutPassword,
                token
                }
            )
        }

    })
});

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