const express = require('express');
const router = express.Router();
const connection = require('../db');
const passport = require('passport');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local').Strategy;


//Login Member

passport.use('local', new LocalStrategy({
    usernameField: 'name',
    passwordField: 'password',
    session: false,
}, (name, password, done) => {
    try {
        connection.query('SELECT * FROM collaboraters WHERE name = ?', name, (err, results) => {
            if (err) {
                console.log("err1", err)
                return done(err, false);
            }
            const user = results[0];
            if (!user) {
                return done(null, false);
            }
            const authPassword = bcrypt.compareSync(password, user.password);
            if (!authPassword) {
                return done(null, false);
            }
            return done(null, user);
        });
    } catch (e) {
        console.log('err', e);
    }
}));

passport.use(new JwtStrategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'secretpwd',
}, (jwtPayload, cb) => cb(null, jwtPayload)
));

router.post('/connect', (req, res) => {
    console.log(req)
    console.log(res)
    passport.authenticate('local', (err, data) => {
        if (err) {
            console.log(err)
            return res.status(500);
        }
        if (!data) {
            return res
                .status(401)
        }
        const { password, ...user } = data;
        const token = jwt.sign(user, 'secretpwd');
        return res.json({ user, token, flash: 'Vous êtes connecté :)' });
    })(req, res);
});

router.get('/', (req, res) => {
    connection.query("SELECT * FROM `collaboraters` WHERE 1", (err, result) => {
        if (err) {
            throw err;
        }
        res.send(result);
    })
})

// Creation Member

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
        res.sendStatus(200);
    });
});

router.delete('/:id', (req, res) => {
    const idCollaborater = req.params.id;
    connection.query('DELETE FROM collaboraters WHERE id_collaboraters = ?', [idCollaborater], (err) => {
        if (err) {
            res.sendStatus(500);
        } else {
            res.sendStatus(200);
        }
    });
});

module.exports = router;