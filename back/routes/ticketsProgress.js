const express = require('express');
const router = express.Router();
const connection = require('../db');
const isAuth = require('../helpers/auth')

router.post('/', isAuth, (req, res) => {
    const newTicket = req.body;
    connection.query('INSERT INTO tickets_progress SET ?', newTicket, (err) => {
        if (err) {
            console.log(err)
            res.sendStatus(500);
        } else {
            connection.query("SELECT * FROM tickets_progress as tp INNER JOIN project_snark as ps ON tp.project_id_project = ps.id_project INNER JOIN collaboraters as co ON tp.collaboraters_id_collaboraters = co.id_collaboraters", (err, result) => {
                if (err) {
                    throw err;
                }
                res.send(result);
        })}
    });
});

router.put('/:id', isAuth, (req, res) => {
    const idTicketsProgress = req.params.id;
    const formData = req.body;
    connection.query('UPDATE tickets_progress SET ? WHERE id_tickets_progress = ?', [formData, idTicketsProgress], (err) => {
        if (err) {
            console.log("err", err)
            res.sendStatus(500);
        } else {
            connection.query("SELECT * FROM tickets_progress as tp INNER JOIN project_snark as ps ON tp.project_id_project = ps.id_project INNER JOIN collaboraters as co ON tp.collaboraters_id_collaboraters = co.id_collaboraters", (err, result) => {
                if (err) {
                    throw err;
                }
                res.send(result);
            })
        }
    });
});

router.get('/', isAuth, (req, res) => {
    connection.query("SELECT * FROM tickets_progress as tp INNER JOIN project_snark as ps ON tp.project_id_project = ps.id_project INNER JOIN collaboraters as co ON tp.collaboraters_id_collaboraters = co.id_collaboraters", (err, result) => {
        if (err) {
            throw err;
        }
        res.send(result);
    })
});

router.delete('/:id', isAuth, (req, res) => {
    const idLotTickets = req.params.id;
    connection.query('DELETE FROM tickets_progress WHERE id_tickets_progress = ?', [idLotTickets], (err) => {
        if (err) {
            res.sendStatus(500);
        } else {
            connection.query("SELECT * FROM tickets_progress as tp INNER JOIN project_snark as ps ON tp.project_id_project = ps.id_project INNER JOIN collaboraters as co ON tp.collaboraters_id_collaboraters = co.id_collaboraters", (err, result) => {
                if (err) {
                    throw err;
                }
                res.send(result);
            })
        }
    });
});

module.exports = router;