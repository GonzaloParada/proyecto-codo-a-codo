let prodContainer = document.querySelector(".productos-container");
let filterOption = document.querySelectorAll(".filter-option");
let menuTitulo = document.querySelector(".menu-titulo");

buscarProductos("HAMBURGUESAS");

filterOption.forEach((el) => {
  let nombreFiltro = el.querySelector(".nombre-filtro").textContent;
  el.addEventListener("click", () => buscarProductos(nombreFiltro));
});

function buscarProductos(nombreFiltro) {
  fetch("./js/productos.json")
    .then((res) => res.json())
    .then((data) => mostrarProductos(data[nombreFiltro], nombreFiltro));
}

function mostrarProductos(productos, nombreCategoria) {
  menuTitulo.textContent = nombreCategoria;
  let cardsHTML = "";
  for (let el of productos) {
    let card = `
    <div class="producto-card">
      <img class="producto-img" src=${el.imgURL} alt=${el.nombre}>
      <h3 class="producto-nombre">${el.nombre}</h3>
      <p class="producto-descripcion">${el.descripcion}</p>
      <p class="producto-precio">${el.precio} $</p>
      <div class="card-hover-bg"></div>
    </div> 
    `;
    cardsHTML += card;
  }
  prodContainer.innerHTML = cardsHTML;
}
