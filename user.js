const userLoader = () => {
    const url = 'https://jsonplaceholder.typicode.com/users';
    fetch(url)
         .then(res => res.json())
             .then(info => {
                   displayUser(info);
             })
}

const displayUser = (users) => {
    const container = document.getElementById('user-container');
    users.forEach(user => {
        const userCard = document.createElement('div');
        
        userCard.innerHTML = `
            <div class="user-card">
            <h2>${user.name}</h2>
            <p>${user.username}</p>
            <p>${user.email}</p>
            <p>${user.phone}</p>
            <p>${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</p>
            

        </div>
        `;
        container.appendChild(userCard);
    });

}

userLoader()