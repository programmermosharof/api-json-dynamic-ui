// const person = {
//     name: 'Joson',
//     age: 30,
//     city: 'New York'  
  
      
// }
// const personJoson = JSON.stringify(person);
// console.log(personJoson);
// const personObj = JSON.parse(personJoson);
// console.log(personObj);

// fetch('https://jsonplaceholder.typicode.com/todos/1')

// const response =  fetch('https://jsonplaceholder.typicode.com/todos/1');

// console.log(response);

const loadPersonInfo = async () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
}



// const loadPost = () => {
//     const url = 'https://jsonplaceholder.typicode.com/posts';
//     fetch(url)
//       .then(response => response.json())
//       .then(json => {
//          console.log(json);
//          displayPost(json);
//         })
// }

// const displayPost = (posts) => {
//    console.log(posts);
//    posts.forEach(post => {
//     console.log(post);
//     const postContainer = document.getElementById('post-container');
//     const postDiv = document.createElement('div');
//     postDiv.classList.add('post');
//     postDiv.innerHTML = `
//         <h3>${post.title}</h3>
//         <p>${post.body}</p>
//     `;
//     postContainer.appendChild(postDiv);
//         });
// }   