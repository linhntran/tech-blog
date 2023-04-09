const { User } = require("../models");

const userData = [
  {
    username: "testuser1",
    email: "testuser1@example.com",
    password: "password111",
  },
  {
    username: "testuser2",
    email: "testuser2@example.com",
    password: "password222",
  },
  {
    username: "testuser3",
    email: "testuser3@example.com",
    password: "password333",
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
