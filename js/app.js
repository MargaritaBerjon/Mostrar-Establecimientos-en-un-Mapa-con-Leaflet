const ui = new UI();

document.addEventListener('DOMContentLoaded', () => {
  ui.mostrarEstablecimientos()
})

//Habilitar buscador

const buscador = document.querySelector('#buscar input');
buscador.addEventListener('input', () => {
  if (buscador.value.length > 5) {
    ui.obtenerSugerencias(buscador.value)
  } else {
    ui.mostrarEstablecimientos();
  }

})