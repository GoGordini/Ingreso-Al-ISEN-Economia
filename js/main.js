const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))
var popover = new bootstrap.Popover(document.querySelector('.popover-dismiss'), {
    trigger: 'focus'
  })
let nombre;
nombre="Gordini";
console.log(nombre);
nombre="Puto El Que Lee"
console.log(nombre);
let mensaje="Mi nombre es " + nombre;
console.log(mensaje);
let tuNombre=prompt ("Ingrese su nombre");
console.log(tuNombre,typeof tuNombre);
let tuEdad=parseInt(prompt ("Ingrese su edad"));
console.log(tuEdad);
alert("Puto el que lee");

