
const signupForm = document.getElementById('signup-form');

signupForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Vérification si l'utilisateur existe déjà
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = users.some(user => user.email === email);

    if (userExists) {
        alert("Cet utilisateur existe déjà !");
    } else {
        const newUser = { username, email, password };
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        alert("Inscription réussie !");
        window.location.href = 'login.html'; // Redirection vers la page de connexion
    }
});