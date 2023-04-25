const { Post } = require('../models');

const postData = [
  {
    title: 'First Post',
    content: 'This is an example of the first post.',
    user_id: 1,
  },
  {
    title: 'Second Post',
    content: 'This is an exmaple of the second post.',
    user_id: 2,
  },
];

const postSeeds = () => Post.bulkCreate(postData);

module.exports = postSeeds;