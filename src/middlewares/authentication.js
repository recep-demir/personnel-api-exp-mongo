"use strict"

const Token = require('../models/token');

module.exports = async (req, res, next) => {

    req.user = null;

    const auth = req.headers?.authorization || null;

    const tokenKey = auth ? auth.split(' ') : null
    //console.log(tokenKey[1])

    if (tokenKey && tokenKey[0]=='Token') {
        const tokenData = await Token.findOne({ token: tokenKey[1] }).populate('userId');
        if (tokenData) req.user = tokenData.userId
    }

next()
}
