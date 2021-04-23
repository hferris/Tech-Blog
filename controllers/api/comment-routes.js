const router = require("express").Router();
const { Comment } = require("../../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    const commData = await Comment.findAll()

    res.status(200).json(commData);
  } catch (error) {
    console.log(error)
    res.status(500).json(error);
  }
});
//find Comment by its `id` value
router.get("/:id", async (req, res) => {
  try {
    const commData = await Comment.findAll()

    res.status(200).json(commData);
  } catch (error) {
    console.log(error)
    res.status(500).json(error);
  }
});

router.post("/", withAuth, async (req, res) => {
  try {
    const commData = await Comment.create(req.body);
    res.status(200).json(commData);
  } catch (error) {
    console.log(error)
    res.status(400).json(error);
  }
});

 // update a comment by its `id` value
router.put("/:id", withAuth, async (req, res) => {
 
  try {
    const commData = await  Comment.update(req.body,{
      where: {
        id: req.params.id,
      },
    });
  
    res.status(200).json(commData);
  } catch (error) {
    console.log(error)
    res.status(400).json(err);
  
  }
});

router.delete("/:id", withAuth, async (req, res) => {
  // delete a comment by its `id` value
  try {
    const commData = await Comment.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!commData) {
      res.status(404).json({ message: "No comment found with this id!" });
      return;
    }

    res.status(200).json(commData);
  } catch (error) {
    console.log(error)
    res.status(500).json(error);
  }
});

module.exports = router;
