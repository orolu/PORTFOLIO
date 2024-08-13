document.addEventListener('DOMContentLoaded', () => {
    fetch('posts.json')
        .then(response => response.json())
        .then(posts => {
            const blogPostsContainer = document.getElementById('blog-posts');
            posts.forEach(post => {
                const postElement = document.createElement('article');
                postElement.innerHTML = `
                    <h2>${post.title}</h2>
                    <p><em>${post.date}</em></p>
                    <p>${post.content.replace(/\n/g, '</p><p>')}</p>
                `;
                blogPostsContainer.appendChild(postElement);
            });
        })
        .catch(error => console.error('Error loading posts:', error));
});
