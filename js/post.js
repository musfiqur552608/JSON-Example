function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayUsers(data))
}

function displayUsers(posts){
    const postscontainer = document.getElementById('posts-container');
    for(const post of posts){
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');
        postDiv.innerHTML =`
            <h4>User-${post.userId}</h4>
            <h5>Post: ${post.title}</h5>
            <p>Post Description: ${post.body}</p>

        `;
        postscontainer.appendChild(postDiv);
    }
}

loadPosts();