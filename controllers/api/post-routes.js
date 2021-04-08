const router = require('express').Router();
const { User, Post, Comment } = require("../home-Routes");
const withAuth = require('../../utils/auth');
const sequelize = require('../../config/connection');

router.get("/", async (req, res) => {
    try {
      const postData = await Post.findAll({
          include: [comment]
      });
  
      const posts = postData.map((post) => Post.get({ plain: true }));
  
      res.render("post", { post });
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  router.get("/:id", async (req, res) => {
    try {
      const postData = await Post.findByPk(req.params.id, {
        include: [{ model: comment}],
      });
  
      const post = postData.get({ plain: true });
  
      res.render("post", {
        ...project,
        logged_in: req.session.logged_in,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  router.post('/', withAuth, async (req, res) => {
      try {
        const newPost = await Post.create({
          ...req.body,
          user_id: req.session.user_id,
        });
    
        res.status(200).json(newPost);
      } catch (err) {
        res.status(400).json(err);
      }
    });
  
    router.put('/:id', withAuth,  async(req, res) => {
      // update a post by its `id` value
      try {
        const postData = await  Post.update(req.body,{
          where: {
            id: req.params.id,
          },
        });
      
          
        res.status(200).json(postData);
      } catch (error) {
        res.status(400).json(err);
      
      }
    });
  
    router.delete('/:id', withAuth, async (req,res)=>{
        // delete a post by its `id` value
    try {
      const postData = await Post.destroy({
        where: {
          id: req.params.id
        }
      });
  
      if (!postData) {
        res.status(404).json({ message: 'No post found with this id!' });
        return;
      }
  
      res.status(200).json(postData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
    
  module.exports = router;