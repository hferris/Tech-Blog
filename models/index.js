const User = require("./User");
const Post = require("./Post");
const Comment = require("./Comment");


// User.hasMany(Comment, { 
//     foreignKey: "userid",
//     onDelete: "cascade",
//     hooks: true
// });
// User.hasMany(Post, { 
//     foreignKey: "userid",

// });
Post.belongsTo(User, {
    foreignKey: "userid", 
    onDelete: "cascade",
});
Post.hasMany(Comment,{
    foreignKey: "postid", 
    onDelete: "cascade", 
    hooks: true

});
Comment.belongsTo(User, {
    foreignKey: "userid",
    onDelete:  "cascade",
    hooks: true
});
// Comment.belongsTo(Post, {
//     foreignKey: "postid",
//     onDelete: "cascade", 
//     hooks: true

// });


module.exports = { User, Post, Comment };