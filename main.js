document.addEventListener('DOMContentLoaded', function() {
    const nameElement = this.querySelector('#name');
    const usernameElement = this.querySelector('#username');
    const avatarElement = this.querySelector('#avatar');
    const reposElement = this. querySelector('#repos');
    const followersElement = this.querySelector('#followers');
    const followingElement = this.querySelector('#following');
    const linkElement = this.querySelector('#link');

    fetch('https://api.github.com/users/saulovmr')
        .then(function(res) {
            return res.json();
        })

        .then(function(json) {
            nameElement.innerText = json.name;
            usernameElement.innerText = json.login;
            avatarElement.src = json.avatar_url;
            reposElement.innerText = json.public_repos;
            followersElement.innerText = json.followers;
            followingElement.innerText = json.following;
            linkElement.href = json.html_url;
        })
})