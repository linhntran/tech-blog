const newCommentFormHandler = async (event) => {
  event.preventDefault();

  const post_id = parseInt(window.location.pathname.split('/').pop());

  const content = document.querySelector('#new-comment').value.trim();

  if (content) {
    const response = await fetch(`/api/comments`, {
      method: 'POST',
      body: JSON.stringify({ comment_text: content, post_id }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.reload(); // When successful, reload the same page
    } else {
      console.log('Response status:', response.status);
      console.log('Response text:', await response.text());
      alert('Unable to add comment.');
    }
  }
};

const newCommentForm = document.querySelector('.new-comment-form');
if (newCommentForm) {
  newCommentForm.addEventListener('submit', newCommentFormHandler);
}