const { Comment } = require('../models');

const commentData = [
  {
    comment_text: 'Great post!',
    user_id: 2,
    post_id: 1,
  },
  {
    comment_text: 'I disagree!',
    user_id: 1,
    post_id: 2,
  },
];

const commentSeeds = () => Comment.bulkCreate(commentData);

module.exports = commentSeeds;
