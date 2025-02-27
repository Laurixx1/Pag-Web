'use strict';

let usuarios = [];

function registroUsuario(){
    let usuario = [];

    // Obtenemos los valores de los campos del formulario:
    console.log('Registrando usuario');

    let nombres = document.getElementById('name').value;
    let apellidos = document.getElementById('lastname').value;
    let telefono = document.getElementById('teléfono').value;
    let celular = document.getElementById('celular').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let repeatpassword = document.getElementById('repeatpassword').value;
    let ethnia = document.getElementById('ethnia').value
    let genero = document.getElementById('genre').value;
    let direccion = document.getElementById('address').value;
    let pais = document.getElementById('country').value;
    let departamento = document.getElementById('department').value;
    let cuidad = document.getElementById('city').value;
    let edad = document.getElementById('age').value;
    let fechanacimiento = document.getElementById('borndate').value;

    let correo = "";
    let contrasena = "";

    // Validacion de correo:
    if (email !== email2){
        alert('Los correos no coinciden');
    }else {
        correo = email;
    }
    // Validacion de contraseña:
    if (password !== password2){
        alert('Las contraseñas no coinciden');
    }else {
        contrasena = password;
    }
    alert('Usuario registrado con éxito');
    // Creamos el usuario en el arreglo:
    usuario.push(nombres);
    usuario.push(apellidos);
    usuario.push(genero);
    usuario.push(correo);
    usuario.push(contrasena);
    usuario.push(fecha_nace);
    usuario.push(departamento);
    usuario.push(municipio);
    usuario.push(telefono);
    usuario.push(etnia);
    usuario.push(vulnerabilidades);
    usuario.push(estrato);

    alert(usuario);

}