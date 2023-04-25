const { User } = require('../models');

const userData = [
    {
      username: 'testuser1',
      email: 'testuser1@email.com',
      password: 'password111',
    },
    {
      username: 'testuser2',
      email: 'testuser2@email.com',
      password: 'password222',
    },
    {
        username: 'testuser3',
        email: 'testuser3@email.com',
        password: 'password333',
      }
  ];

  const userSeeds = () => User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  module.exports = userSeeds;