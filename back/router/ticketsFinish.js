const express = require('express');
const router = express.Router();
const connection = require('../db');

router.post('/', (req, res) => {
    const newTicket = req.body;
    connection.query('INSERT INTO tickets_finish SET ?', newTicket, (err) => {
        if (err) {
            res.sendStatus(500);
        } else {
            res.sendStatus(200);
        }
    });
});

router.put('/:id', (req, res) => {
    const idTicketsFinish = req.params.id;
    const formData = req.body;
    connection.query('UPDATE tickets_finish SET ? WHERE id_tickets_finish = ?', [formData, idTicketsFinish], (err) => {
        if (err) {
            console.log("err", err)
            res.sendStatus(500);
        } else {
            res.sendStatus(200);
        }
    });
});

router.get('/', (req, res) => {
    connection.query("SELECT * FROM tickets_finish", (err, result) => {
        if (err) {
            throw err;
        }
        res.send(result);
    })
})

module.exports = router;