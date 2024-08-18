
// REGISTER

const registerForm = document.getElementById('registerForm');

registerForm.addEventListener('submit', function(event){
    event.preventDefault();

    const username = document.getElementById('inputUsername').value;
    const email = document.getElementById('inputEmail').value;
    const password = document.getElementById('inputPassword').value;

    const users = JSON.parse(localStorage.getItem('users')) || [];

    const userExist = users.find(user => user.email === email);

    if (userExist){
        alert('El usuario ya esta registrado.');
    } else {
        users.push({username, email, password});
        localStorage.setItem('users', JSON.stringify(users));
        alert('Se ha registrado correctamente.');
        window.location.href = 'login.html';
    }
})

// LOGIN 

const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const users = JSON.parse(localStorage.getItem('users')) || [];

    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        sessionStorage.setItem('loggedUser', JSON.stringify({email: user.email}));

        alert('Inicio de sesión exitoso.');
        window.location.href = 'index.html';

    } else {
        alert('Usuario o contraseña incorrectos.');
    }
});

function cerrarSesion(){
    document.getElementById('logoutButton').addEventListener('click', function() {
        sessionStorage.removeItem('loggedUser');
        window.location.href = 'login.html';
    });
}

