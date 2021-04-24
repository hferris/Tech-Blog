const router = require("express").Router();
const { User } = require("../../models");
const withAuth = require("../../utils/auth");



  router.get("/", async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: [{
          model: User,
          attributes: ["name"],
        },
      ],
    });

    const user = userData.map((user) => user.get({ plain: true }));

    res.render("dashboard", { 
      projects, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

  router.get("/:id", async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id, {
      include: [{ model: comment }],
    });

    const post = userData.get({ plain: true });

    res.render("post", {
      ...project,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


  router.post("/", withAuth, async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

  router.post("/login", withAuth, async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: "You are now logged in!" });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});


  router.post("/logout", withAuth, async (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

 // update a comment by its `id` value
 router.put("/:id", withAuth, async (req, res) => {
 
  try {
    const userData = await  User.update(req.body,{
      where: {
        id: req.params.id,
      },
    });
  
    res.status(200).json(userData);
  } catch (error) {
    console.log(error)
    res.status(400).json(err);
  
  }
});

 // delete a comment by its `id` value
router.delete("/:id", withAuth, async (req, res) => {
  try {
    const userData = await User.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!userData) {
      res.status(404).json({ message: "No comment found with this id!" });
      return;
    }

    res.status(200).json(userData);
  } catch (error) {
    console.log(error)
    res.status(500).json(error);
  }
});

module.exports = router;
