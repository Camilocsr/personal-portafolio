// const de el formulario de contacto.
const nombre = document.getElementById('name');
const correo = document.getElementById('email');
const numero = document.getElementById('number-contac');
const whatSapp = document.getElementById("whatsapp");
const asunto = document.getElementById('asunto');
const form = document.getElementById('form');
const parrafo = document.getElementById('parrafo-formulario');

form.addEventListener('submit', contactactar=>{ // función del formulario de contacto.
    contactactar.preventDefault();
    let = entrar = false;
    let = texto = "";
    let validarEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,6})+$/;
    if(nombre.value.length < 4){
        texto += `El nombre no es valido <br>`;
        entrar = true;
    } else if(!validarEmail.test(correo.value)){
        texto += `El email no es valido <br>`;
        entrar = true;
    } else if(numero.value.length <= 9 || numero.value.length >= 11){
        texto += `El numero de Celular no es valido <br>`;
        entrar = true;
    } else if(whatsapp.value.length <= 9 || numero.value.length >= 11){
        texto += `El numero de Whatsapp no es valido <br>`;
        entrar = true;
    } else if(asunto.value.length <= 9){
        texto += `El asunto debe tener minimo 10 caracteres <br>`;
        entrar = true;
    } else {
        alert("Muchas gracias por comunicarte conmigo.");
        entrar = true;
    }
    if(entrar){
        parrafo.innerHTML =  texto;
    }
});