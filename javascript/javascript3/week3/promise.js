const repolist = document.querySelector('div');

function renderUser(userData) {
    const itemsArray = userData.map(item => item.items);
    itemsArray.forEach(element => {
        let fullName = document.createElement("li");
        fullName.innerHTML = `Full name of repository:${element[0].full_name}<br> owner of repository: ${element[0].owner.login} <br>`;
        repolist.appendChild(fullName)
        let a = document.createElement("a");
        a.href = element[0].url;
        a.innerHTML = "url for the repository"
        fullName.appendChild(a);
        fullName.style.listStyleType = 'none';
    });
}
function fetchUserRepo(user) {
    return fetch(`https://api.github.com/search/repositories?q=user:${user}`)
        .then(response => response.json())
        .then(data => data)
}
Promise.all([fetchUserRepo('seenachacko'), fetchUserRepo('Gohar33'), fetchUserRepo('SlaviaF')])
    .then((values) => renderUser(values))
    .catch((error) => console.log("something went wrong"))