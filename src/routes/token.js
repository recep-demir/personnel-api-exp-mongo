"use strict"

const router = require('express').Router()
const { list, create, update, deletee, read } = require("../controllers/token");
const {isLogin} = require("../middlewares/permissions")


router.route("/").get(isLogin, list).post(create)

router.route("/:id")
    .get(read)
    .put(update)
    .patch(update)
    .delete(deletee);

module.exports = router