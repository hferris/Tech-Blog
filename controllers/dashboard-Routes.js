const router = require("express").Router();
const { User, Post, Comment } = require("../models/");
const withAuth = require("../utils/auth");


// We need this later on 
res.render("homepage", {
    users,
    logged_in: req.session.logged_in,



module.exports = router;