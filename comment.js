// loadComment = async () => {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/comments');  
//         const data = await response.json();
//         displayComment(data);
//     } catch (error) {
//         console.log(error);
//     }
// }

// const displayComment = (comments) => {
//     const commentContainer = document.getElementById('comment-container');      
//     comments.forEach(comment => {
//         const commentCard = document.createElement('div');
//         commentCard.classList.add('comment-card');  
//         commentCard.innerHTML = `

//         <h4>${comment.name}</h4>
//         <p>${comment.email}</p>
//         <p>${comment.body}</p>
//         `;
//         commentContainer.appendChild(commentCard);
//     });
// }
// loadComment()


const loadComments = () => {
    const url = 'https://jsonplaceholder.typicode.com/comments';
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            displayComments(data);
        })
}

const displayComments = (comments) => {
    const commentContainer = document.getElementById('comment-container');

    comments.forEach(comment => {
        const commentCard = document.createElement('div');
        commentCard.innerHTML = `
        <div class="comment-card">
        <h4>${comment.name}</h4>
        <p>${comment.email}</p>
        <p>${comment.body}</p>
        </div>
        `;

        commentContainer.appendChild(commentCard);
    })
}
loadComments()