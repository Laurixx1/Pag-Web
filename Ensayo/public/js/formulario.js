'use strict';

const formulario = document.getElementById('formulario');
// Manejador de eventos:
formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();

const perfiles = [];

    const datos = new FormData(formulario);     // FormData es un objeto que permite capturar los datos de un formulario
    
    let nombre = datos.get('nombre');    // Obtiene el valor del campo 'nombre'
    let apellido = datos.get('apellido');   // Obtiene el valor del campo 'apellido'
    let profesion = datos.get('profesion');    // Obtiene el valor del campo 'nombre'
    let correo = datos.get('email');   // Obtiene el valor del campo 'apellido'
    let telefono = datos.get('telefono');    // Obtiene el valor del campo 'nombre'
    
const usuario = {
    nombre : nombre,
    apellido : apellido,
    profesion : profesion,
    correo : correo,
    telefono : telefono,
}

// Agregamos al usuario al arreglo de perfiles:
perfiles.push(usuario);
formulario.reset();

// Almacenamos dentro de LocalStorage
localStorage.setItem('perfiles', JSON.stringify(perfiles));    



    formulario.reset();     // Limpia los campos del formulario
    console.log(perfiles);
});

function mostrarPerfiles() {
    const perfiles = JSON.parse(localStorage.getItem('perfiles'));
    const contenedor = document.getElementById('row');

    perfiles.forEach((perfil) => {
        const div = document.createElement('div');
        div.classList.add('card col md-4');
        div.innerHTML = `
        <div class="card-header">
                    Perfil de usuario
                </div>
                <div class="card-body">
                    <h4 class="card-title">${perfil.nombre} ${perfil.apellido}</h4>
                    <h5 class="card-title">${perfil.profesion}</h5>
                    <p class="card-text">${perfil.correo} - ${perfil.telefono}</p>
                    <a href="#" class="btn btn-primary">Ver perfil</a>
                </div>
        `;
        contenedor.appendChild(div);
    })
}