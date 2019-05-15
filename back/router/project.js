const express = require('express');
const router = express.Router();
const connection = require('../db');

router.post('/', (req, res) => {
    const newProject = req.body;
    connection.query('INSERT INTO project_snark SET ?', newProject, (err) => {
        if (err) {
            console.log(err)
            res.sendStatus(500);
        } else {
            res.sendStatus(200);
        }
    });
});

router.put('/:id', (req, res) => {
    const idProject = req.params.id;
    const formData = req.body;
    connection.query('UPDATE project_snark SET ? WHERE id_project = ?', [formData, idProject], (err) => {
        if (err) {
            console.log("err", err)
            res.sendStatus(500);
        } else {
            res.sendStatus(200);
        }
    });
});

router.delete('/:id', (req, res) => {
    const idProject = req.params.id;
    connection.query('DELETE FROM project_snark WHERE id_project = ?', [idProject], (err) => {
        if (err) {
            res.sendStatus(500);
        } else {
            res.sendStatus(200);
        }
    });
});

router.get('/', (req, res) => {
    connection.query("SELECT * FROM project_snark", (err, result) => {
        if (err) {
            throw err;
        }
        res.send(result);
    })
})

module.exports = router;

