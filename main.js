// Splash
const splash = document.querySelector('.splash');

document.addEventListener('DOMContentLoaded', (e)=> {
    setTimeout(()=> {
        splash.classList.add('display-none');
    }, 2000);
})


// Menu Redes Sociales
let toggle = document.querySelector('.toggle');
let menu = document.querySelector('.menu');
toggle.onclick = function() {
    menu.classList.toggle('active')
}

// Animación botón "SOBRE MI"
const btn_sobremi = document.querySelector('.btn-sobremi');
btn_sobremi.onmousemove = function(e) {
    const x = e.pageX - btn_sobremi.offsetLeft;
    const y = e.pageY - btn_sobremi.offsetTop;   

    btn_sobremi.style.setProperty('--x', x + 'px');
    btn_sobremi.style.setProperty('--y', y + 'px');
} 
// Animación botón "DIME ALGO"
const btn_contacto = document.querySelector('.btn-contacto');
btn_contacto.onmousemove = function(e) {
    const x = e.pageX - btn_contacto.offsetLeft;
    const y = e.pageY - btn_contacto.offsetTop;   

    btn_contacto.style.setProperty('--x', x + 'px');
    btn_contacto.style.setProperty('--y', y + 'px');
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
        // this.document.getElementById('navbar').style.padding = '0px 80px';
        // this.document.getElementById('navbar').style.height = '70px';
    } else {
        this.document.getElementById('navbar').style.top = '-290px';
    }

    // Si se está al principio de la página, se quita la sombra y la opacidad
    if (desplazamiento_actual == 0) {
        this.document.getElementById('navbar').style.boxShadow = 'none';
        this.document.getElementById('navbar').style.opacity = '1';
        // this.document.getElementById('navbar').style.padding = '45px 80px';
    }

    ubicacionPrincipal = desplazamiento_actual;
}


// Animación de revelar elementos según bajas
ScrollReveal().reveal('.contenido-sobre-mi', { delay: 500});
ScrollReveal().reveal('.div-formacion', { delay: 500});
ScrollReveal().reveal('.contenido-proyectos', { delay: 500});
ScrollReveal().reveal('.div-contacto', { delay: 500});