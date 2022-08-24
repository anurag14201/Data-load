// function displayUser() {
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//         .then(response => response.json())
//         .then(data => console.log(data))
// }

function loadUser() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => displayUser(data));
}


function displayUser(data) {
    // console.log(data);
    const ul = document.getElementById('nothing')
    for (const users of data) {
        console.log(users.name);
        const li = document.createElement('li');
        li.innerText = `name: ${users.name} , Email: ${users.email}`;
        ul.appendChild(li);
    }
}
