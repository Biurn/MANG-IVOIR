const user = JSON.parse(localStorage.getItem('loggedIn'));

if (user) {
    document.getElementById('username').textContent = user.username;
    document.getElementById('email').textContent = user.email;
} else {
    window.location.href = 'login.html'; // Redirige vers la page de connexion si l'utilisateur n'est pas connecté
}

document.getElementById('logout').addEventListener('click', function() {
    localStorage.removeItem('loggedIn');
    window.location.href = 'login.html'; // Redirige vers la page de connexion après déconnexion
});