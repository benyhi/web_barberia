function usuarioLogged(){
    const logged = sessionStorage.getItem('loggedUser');
    if (logged){
        return 'true';
    }
}

window.onload = function(){
    if (usuarioLogged() === "true"){
        console.log('true')
        document.getElementById('cursos').style.display = 'block'
        document.getElementById('logout').style.display = 'block'
    }
}

function cerrarSesion(){
        sessionStorage.removeItem('loggedUser');
        window.location.href = 'index.html';
}

function cerrarDropdown(){
    const menu = document.getElementById('loginMenu');
    menu.classList.toggle("visible");
}

document.addEventListener('DOMContentLoaded', function() {
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const carruselContenido = document.querySelector('.carrusel-contenido');
    const items = document.querySelectorAll('.carrusel-item');
    let index = 0;

    function updateCarousel() {
        const offset = -index * 100;
        carruselContenido.style.transform = `translateX(${offset}%)`;
    }

    nextBtn.addEventListener('click', function() {
        index = (index + 1) % items.length;
        updateCarousel();
    });

    prevBtn.addEventListener('click', function() {
        index = (index - 1 + items.length) % items.length;
        updateCarousel();
    });
});