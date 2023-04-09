const { Comment } = require("../models");

const commentData = [
  {
    comment_text: "Great work!",
    user_id: 1,
    post_id: 1,
  },
  {
    comment_text: "I disagree!",
    user_id: 2,
    post_id: 1,
  }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
