//Icono del menu y estilos del fondo del nav cuando se activa

let activo = false;
boton = document.querySelector(".boton-nav");
fondo = document.querySelector(".navbar-collapse");
boton.addEventListener("click", (e) => {
  boton = e.target;
  activo == true
    ? //Icono del nav
      ((boton.className = "bx bx-menu bg-transparent text-white"),
      (activo = false))
    : //Icono del nav
      ((boton.className = "bx bx-menu-alt-left bg-transparent text-white"),
      (activo = true),
      //Estilos del fondo del nav
      (fondo.style.backgroundColor = "rgb(37, 37, 37)"),
      (fondo.style.border = "1px solid white"),
      (fondo.style.borderRadius = ".5rem"));
});
//Scroll nav
console.log();

window.onscroll = () => {
  const nav = document.querySelector(".navbar");
  scroll = window.scrollY;
  ancho = document.documentElement.clientWidth;
  scroll > 100 && ancho > 768
    ? (nav.style.borderBottom = ".2r em white solid")
    : (nav.style.borderBottom = "none");
};

//Transiciones
window.sr = ScrollReveal();

//Objetivos
sr.reveal('.objetivos img', {
    duration:2000,
    origin: 'top',
    distance: '-150px',
    opacity: 0.1,
    
});

//Ferias
sr.reveal('.ferias img', {
  duration: 1000,
  origin: 'left',
  distance: '-300px',
  opacity: 0.1
});


//Conocimientos
sr.reveal('.Tracker', {
  duration: 3000,
  opacity: 0.1,
  scale: 0.5,
  reset:true
});


//img-sobremi
sr.reveal('.img-sobremi', {
  duration: 1000,
  reset:true,
  rotate: {
    y: 180,
}
});
