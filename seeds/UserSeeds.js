const { User } = require("../models");

const userData = []

[
  {
    "Username": "E-Anna",
    "email": "Eanna@gmail.com",
    "password": "EApassword1"
  },
  {
    "Username": "F-Hanna",
    "email": "hferris@gmail.com",
    "password": "HFpassword2"
  },
  {
    "Username": "M-Denise",
    "email": "Mdenise@gmail.com",
    "password": "MDpassword3"
  }
  
];

const SeedUsers = () => User.bulkCreate(userData);

module.exports = SeedUsers;
