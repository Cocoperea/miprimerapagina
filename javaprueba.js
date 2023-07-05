var nombre = "juan";
var edad = 22;
var altura = 1.7;
var estudiante = true;

console.log(nombre);
console.log(edad);
console.log(typeof altura);
console.log(typeof estudiante);


function sumar(num1, num2) {
 return num1 + num2;
}
function restar(num1, num2) {
 return num1 - num2;   
}
function producto(num1, num2) {
 return num1 * num2;
}

let resultado3 = producto(2,3);
let resultado1 = sumar(2,3);
let resultado2 = restar(5,2);

console.log(resultado3);
console.log(resultado1);
console.log(resultado2);

console.log("hola mundo");

const PI = 3.14159;

console.log(PI);

function prueba(num1,num2) {
 return num1>num2; 
}

let resultado4 = prueba(1,2);

console.log(resultado4);

function prueba1(num1) {
 return 0<num1<10;
}

let resultado5 = prueba1(5);

console.log(resultado5);

function showAlert() {
 alert('¡Gracias por ser del club mas grande del mundo!');
}
