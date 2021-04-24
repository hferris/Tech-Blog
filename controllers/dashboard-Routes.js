const router = require("express").Router();
const { User, Post, Comment } = require("../models");
const { response } = require('express');
const withAuth = require("../utils/auth");
const sequelize = require('../config/connection');

router.get('/', withAuth, async (req, res) => {
    try {
      const postData = await Post.findAll({
        attributes: ['id', 'title','textSpot'],
        include: [{ model: comment }]
      });
  
      const posts = postData.map((project) => project.get({ plain: true }));
  
      res.render('homepage', {
        users,
        logged_in: req.session.logged_in,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  router.get('/login', (req, res) => {
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });
  
  module.exports = router;




// We need this later on 
// res.render("homepage", {
//     users,
//     logged_in: req.session.logged_in});


