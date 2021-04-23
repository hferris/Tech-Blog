const { Comment } = require('../models');

const commData = [
    {
        Comment: "I think I'm losing my mind b/c of this App",
        post_id: 0,
    },
    {
        Comment: "Jsut when you think you have everything something is missing",
        post_id: 1,
    },
    {
        Comment: "This is almost done not to complete, self competition",
        post_id: 2,
    },
];

const SeedComments = () => Comment.bulkCreate(commentData);

module.exports = SeedComments;