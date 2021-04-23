const { Comment } = require('../models');

const commData = [

    //comments examples (to make self feel better :))
    {
        comment: "I think I'm losing my mind b/c of this App",
        // post_id: 0,
    },
    {
        comment: "Jsut when you think you have everything something is missing",
        // post_id: 1,
    },
    {
        comment: "This is almost done not to complete, self competition",
        // post_id: 2,
    },
];

const SeedComments = () => Comment.bulkCreate(commData);

module.exports = SeedComments;