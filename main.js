// Splash
const splash = document.querySelector('.splash');

document.addEventListener('DOMContentLoaded', (e)=> {
    setTimeout(()=> {
        splash.classList.add('display-none');
    }, 2000);
})


// Animación botón "SOBRE MI"
const btn_sobremi = document.querySelector('.btn-sobremi');
btn_sobremi.onmousemove = function(e) {
    const x = e.pageX - btn_sobremi.offsetLeft;
    const y = e.pageY - btn_sobremi.offsetTop;   

    btn_sobremi.style.setProperty('--x', x + 'px');
    btn_sobremi.style.setProperty('--y', y + 'px');
} 
// Animación contenido "SOBRE MI"
const contenido_sobre_mi = document.querySelector('.contenido-sobre-mi');
contenido_sobre_mi.onmousemove = function(e) {
    const x = e.pageX - contenido_sobre_mi.offsetLeft;
    const y = e.pageY - contenido_sobre_mi.offsetTop;   

    contenido_sobre_mi.style.setProperty('--x', x + 'px');
    contenido_sobre_mi.style.setProperty('--y', y + 'px');
} 


// Mostrar o no la barra de navegación
let ubicacionPrincipal = window.pageYOffset;

window.onscroll = function() {
    let desplazamiento_actual = window.pageYOffset;

    // Se oculta o se muestra la barra de navegación dependiendo del scrolling del usuario 
    if (ubicacionPrincipal >= desplazamiento_actual) {
        this.document.getElementById('navbar').style.top = '0';
        this.document.getElementById('navbar').style.boxShadow = '0px 3px 8px 0px #0c0414';
        this.document.getElementById('navbar').style.opacity = '0.98';
        this.document.getElementById('navbar').style.padding = '0px 80px';
        this.document.getElementById('navbar').style.height = '70px';
    } else {
        this.document.getElementById('navbar').style.top = '-200px';
    }

    // Si se está al principio de la página, se quita la sombra y la opacidad
    if (desplazamiento_actual == 0) {
        this.document.getElementById('navbar').style.boxShadow = 'none';
        this.document.getElementById('navbar').style.opacity = '1';
        this.document.getElementById('navbar').style.padding = '45px 80px';
    }

    ubicacionPrincipal = desplazamiento_actual;
}


// Animación de revelar elementos según bajas
ScrollReveal().reveal('.contenido-sobre-mi', { delay: 500});
ScrollReveal().reveal('.div-formacion', { delay: 500});
ScrollReveal().reveal('.contenido-experiencia', { delay: 500});
ScrollReveal().reveal('.div-contacto', { delay: 500});