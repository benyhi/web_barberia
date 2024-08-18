
// Script para configurar las fechas mínima y máxima
const today = new Date().toISOString().split('T')[0];
const maxDate = new Date();
maxDate.setDate(maxDate.getDate() + 14);
const maxDateStr = maxDate.toISOString().split('T')[0];

document.getElementById('dia').setAttribute('min', today);
document.getElementById('dia').setAttribute('max', maxDateStr);

function seleccionar() {
    const div = document.getElementById('barbero');
    // Alterna la clase 'seleccionado' en el div clickeado
    div.classList.toggle('seleccionado')
}


