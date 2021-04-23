const { User } = require("../models");

const userData = [
  {
    name: "Anna",
    email: "Eanna@gmail.com",
    password: "EApassword1",
  },
  {
    name: "Hanna",
    email: "hferris@gmail.com",
    password: "HFpassword2",
  },
  {
    name: "Denise",
    email: "Mdenise@gmail.com",
    password: "MDpassword3",
  },
];

const SeedUsers = () => User.bulkCreate(userData);

module.exports = SeedUsers;
