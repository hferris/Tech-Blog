const router = require("express").Router();
const { post } = require("../home-Routes");
const { Comment } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    const commData = await Comment.findAll({
        include: [post]
    });

    const comments = commData.map((comment) => Comment.get({ plain: true }));

    res.render("comments", { comments });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const commData = await Comment.findByPk(req.params.id, {
      include: [{ model: post}],
    });

    const comment = commData.get({ plain: true });

    res.render("comment", {
      ...project,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', withAuth, async (req, res) => {
    try {
      const newComment = await Comment.create({
        ...req.body,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newComment);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  router.put('/:id', withAuth,  async(req, res) => {
    // update a comment by its `id` value
    try {
      const commData = await  Comment.update(req.body,{
        where: {
          id: req.params.id,
        },
      });
    
        
      res.status(200).json(commData);
    } catch (error) {
      res.status(400).json(err);
    
    }
  });

  router.delete('/:id', withAuth, async (req,res)=>{
      // delete a comment by its `id` value
  try {
    const commData = await Category.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!commData) {
      res.status(404).json({ message: 'No comment found with this id!' });
      return;
    }

    res.status(200).json(commData);
  } catch (err) {
    res.status(500).json(err);
  }
});
  
module.exports = router;