// Create new post public/js/new-post.js
const newPostFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#title-new-post').value.trim();
  const content = document.querySelector('#content-new-post').value.trim();

  if (title && content) {
    const response = await fetch('/api/posts', {
      method: 'POST',
      body: JSON.stringify({ title, content }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to create a new post.');
    }
  }
};

document
  .querySelector('.new-post-form')
  .addEventListener('submit', newPostFormHandler);
