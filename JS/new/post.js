function post() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => displaypost(data))
}
post();
function displaypost(posts) {
    // console.log(post);
    const postContiner = document.getElementById('posts');

    for (const post of posts) {
        const div = document.createElement('div');
        div.innerHTML = `
        <h3>${post.title}</h3>
        `
        postContiner.appendChild('div');
        // console.log(post.title);
    }
}