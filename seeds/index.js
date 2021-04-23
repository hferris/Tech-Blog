const usersSeeds = require("./usersSeed");
const commSeeds = require("./commentSeed");
const postsSeeds = require("./postSeed");
const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  await usersSeeds();
  await commSeeds();
  await postsSeeds();
};

seedAll();
