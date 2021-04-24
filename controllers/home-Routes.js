const router = require('express').Router();
const {User, Comment, Post} = require('../models');
const path = require('path');
const withAuth = require('../utils/auth');
const sequelize=require('../config/connection');



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