
const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        alert("Connexion réussie !");
        localStorage.setItem('loggedIn', JSON.stringify(user)); // Sauvegarder l'utilisateur connecté
        window.location.href = 'profile.html'; // Redirection vers la page du profil
    } else {
        alert("Identifiants incorrects !");
    }
});