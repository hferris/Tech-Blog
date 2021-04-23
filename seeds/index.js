const seedUsers = require("./user-seeds");
const seedComments = require("./comment-seeds");
const seedPosts = require("./post-seeds");
const sequelize = require("../config/connection");

const seedAll = (async () => {await sequelize.sync({ force: true });
    await seedUsers();
    await seedComments();
    await seedPosts();
   
}
);

seedAll;