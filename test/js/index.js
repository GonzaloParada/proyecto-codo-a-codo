/*-----------------funcionalidad de menu scroll------------------------ */

let btnHamb = document.querySelector(".btn-hamb");
let menuDesplegable = document.querySelector(".nav-hamb");
let body = document.querySelector(".body");

btnHamb.addEventListener("click", abrirCerrarMenu);

function abrirCerrarMenu() {
  menuDesplegable.classList.toggle("nav-hamb--active");
  if (menuDesplegable.classList.contains("nav-hamb--active")) {
    btnHamb.style.position = "fixed";
    body.classList.add("body-scroll-none");
  } else {
    btnHamb.style.position = "absolute";
    body.classList.remove("body-scroll-none");
  }
}
