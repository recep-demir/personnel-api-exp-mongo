"use strict"


const Personnel = require("../models/personnel");
const Token = require('../models/token');
const passwordEncrypt = require("../helpers/passwordEncrypt");


module.exports = {

    login: async (req, res) => {

        const { username, email, password } = req.body;

        if ((username || email) && password) {
            const user = await Personnel.findOne({ $or: [{ username }, { email }], password });

            res.status(200).send({
                error: false,
                message:"OK"

            })

        } else {
            res.errorStatusCode = 401;
            throw new Error('username/email and password required')
        }



    },


}
