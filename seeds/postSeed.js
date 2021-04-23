const { Post } = require('../models');

const postData = [
  {
    title: "Coding",
        content: "I hope the day of me coding on the fly comes sooner than later",
        // user_id: 3
  },{
    title: 'Dogs',
        content: "I haven't found a human being as trusting and loyal as dogs",
        // user_id: 2
  },
  {
    title: 'Cats',
        content: "If you plan on getting cats, don't waste your money on buying TV's, they are enough entertainment",
        // user_id: 1
  },
]


const SeedPosts = () => Post.bulkCreate(postData);

module.exports = SeedPosts;