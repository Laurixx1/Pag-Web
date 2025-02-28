'use strict';
const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    const datos = new FormData(formulario);

    datos.get('nombre');  //obtiene el valor del campo 'nombre'
    datos.get('apellido');
    formulario.reset();
    console.log(datos)
})
