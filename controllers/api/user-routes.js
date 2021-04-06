const router = require('express').Router();
const { User} = require('../../models');
const {Post} = require('../../models');
const {Comment} = require('../../models');

// This is the 'get' route 
router.get('/', async (req, res) => {
  // Here, index.html is rendered
  res.sendFile(path.join(__dirname, '../views/index.html'));
});

module.exports = router;
