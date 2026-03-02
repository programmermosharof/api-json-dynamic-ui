const loadPost = () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    fetch(url)
        .then(response => response.json())
        .then((data)=> {
            // console.log(data);
            displayPost(data);
        })

}
const displayPost = (posts) => {
//  1: get the container
   const postContainer = document.getElementById('post-container');
   // 2: loop through the posts
   posts.forEach(post => {
//  3 : create a div for each post
    const postDiv = document.createElement('div');
    postDiv.innerHTML = `        <div class="post-card">
            <h2 >${post.title}</h2>
            <p >
                ${post.body}
            </p>

        </div>
    `
// 4: append the post div to the container
    postContainer.appendChild(postDiv);
   })
 }  
 
 
displayPost(posts);