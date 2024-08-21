// Script para configurar las fechas mínima y máxima
const hoy = new Date().toISOString().split('T')[0];
const fechaMaxima = new Date();
fechaMaxima.setDate(fechaMaxima.getDate() + 14);
const fechaMaximaStr = fechaMaxima.toISOString().split('T')[0];

// Le pone el atributo min=today y max=fechamaxima
document.getElementById('dia').setAttribute('min', hoy);
document.getElementById('dia').setAttribute('max', fechaMaximaStr);


const barbero1 = document.getElementById('barbero1')
const barbero2 =document.getElementById('barbero2')

// Selecciona todas las tarjetas
const cards = document.querySelectorAll('.barbero');

// Itera sobre cada tarjeta y añade un evento de clic
cards.forEach(card => {
    card.addEventListener('click', () => {
        // Remueve la clase 'selected' de cualquier tarjeta que la tenga
        cards.forEach(c => c.classList.remove('seleccionado'));
        
        // Añade la clase 'selected' a la tarjeta que se ha clicado
        card.classList.add('seleccionado');
    });
});


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