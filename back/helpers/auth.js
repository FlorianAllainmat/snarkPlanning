"use strict";

const jwt = require('jsonwebtoken');
const config = require('config');

const isAuth = (req, res, next) => {
    let userToken = req.get("Authorization");
    if (!userToken) {
        console.log("No Token")
    } else {
        try {
            userToken = userToken.replace(/^Bearer\s/, '');
            jwt.verify(userToken, config.secret, function (err) {
                if (err) {
                    if (err.name === 'TokenExpiredError') {
                        console.log('Token expired')
                    } else {
                        console.log(err)
                        console.log('Invalid token')
                    }
                } else {
                    next()
                }
            });
        } catch (err) {
            console.log(err, 500)
        }
    }
};

module.exports = isAuth;