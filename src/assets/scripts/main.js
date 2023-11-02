/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

// Obtener los elementos del DOM
const portada = document.querySelector(".portada");
const imagenes = portada.querySelectorAll("img");
const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");

let posicionActual = 0;

// Función para mostrar una sola imagen y ocultar las demás
const mostrarImagen = (indice) => {
  for (let i = 0; i < imagenes.length; i++) {
    if (i === indice) {
      imagenes[i].classList.remove("hide");
    } else {
      imagenes[i].classList.add("hide");
    }
  }
};

// Mostrar la primera imagen y ocultar las demás al cargar la página
mostrarImagen(posicionActual);

// Evento de clic en el botón "Anterior"
prevBtn.addEventListener("click", () => {
  if (posicionActual > 0) {
    posicionActual--;
  } else {
    posicionActual = imagenes.length - 1;
  }
  mostrarImagen(posicionActual);
});

// Evento de clic en el botón "Siguiente"
nextBtn.addEventListener("click", () => {
  if (posicionActual < imagenes.length - 1) {
    posicionActual++;
  } else {
    posicionActual = 0;
  }
  mostrarImagen(posicionActual);
});

+(function () {
  const university = "UOC";
  console.log(`Hello, ${university}!`);
})();
