"use strict"

/*let alumnos = new Array();
let miNombre;

do{
    miNombre = prompt("¿Cuál es tu nombre?");

    if(miNombre != ""){
        alumnos.push(miNombre);
    }else{
        alert("escriba un nombre, por favor");
    }
        
    console.log(miNombre);
}while(miNombre != null);//cuando se pulsa "cancel"

console.log(miNombre);

//que pida dos números y los compare
let numeros = new Array();
let numero1;
let numero2;

numero1 = prompt("escriba un número");
numero2 = prompt("escriba otro número");

if( numero1 > numero2){
    console.log(numero1 + " " + ">" + " " + numero2);
}else if( numero1 < numero2){
    console.log(numero1 + " " + "<" + " " + numero2);
}else{
    console.log(numero1 + " " + "=" + " " + numero2);
}

//la versión del profesor
let numeros = new Array();
let num;
let i = 0;
while (i < 2){
    num = prompt("Pon un número");

    let c = Number(num);
    if(!isNaN(c)){
        numeros.push(num);
        i++
    }else{
        alert("utilice carcateres numéricos")
    }
}
if(numeros[0] > numeros[1]){
    alert(numeros[0] + " es el mayor");
}else if(numeros[0] < numeros[1]){
    alert(numeros[1] + " es el mayor");
}else{
    alert("los números son iguales");
}

//no sé bien para qué es esto
let numero = prompt("Pon un número");
console.log(typeof numero);
let nFloat = Number(numero); //convierte a un número sea float o int
let n = parseInt(numero); //convierte a un entero
console.log(typeof n);
console.log(n)

//pedir el nombre, comprobar que el campo no está vació y saludar con una alerta
//primera opción, pero no vuelve a salir el prompt
var name = prompt("¿Cuál es tu nombre?");
if(name == ""){
    alert("Por favor, escriba su nombre")
}else{
    alert("Hola " + name)
    i++
}

//versión del porfesor
let i = 0;
let nombre;
while(i < 1){
    nombre = prompt("¿Cuál es tunombre?")
    if(nombre == ""){
        alert("Por favor, escriba su nombre")
    }else{
        alert("Hola " + nombre)
        i++
    }
}

//pedir los días de la semana, comprobar que es correcto y dependiendo del día mostrar una alerta con qué hacer
//no me sale el alert
var diaSemana = prompt("¿Qué vamos a hacer hoy, día...?")
if(diaSemana === "lunes", "martes", "miercoles"){
    switch(diaSemana){
        case "lunes":
            alert("ir a comer con los amigos");
        break;

        case "martes":
            alert("estudiar programación");
        break;

        case "miércoles":
            alert("bañarse en la piscina");
        break;
    }
}else{
    alert("escriba un día de la semana, por favor");
}


let checkDia = false;

do{
    let diaSemana = prompt("¿Qué vamos a hacer hoy, día...?")
    diaSemana = diaSemana.toLowerCase();

    switch(diaSemana){
        case "lunes":
            alert("ir a comer con los amigos");
        break;

        case "martes":
            alert("estudiar programación");
        break;

        case "miércoles":
            alert("bañarse en la piscina");
        break;

        case "jueves":
            alert("ir a la compra");
        break;

        case "viernes":
            alert("película por la noche");
        break;

        default:
            alert("escriba un día de la semana")
        break;
    }
}while(checkDia != true)

//pedir un numero del 1 al 10 y mostrar su tabla de multiplicar (if, and y for)

//salen las operaciones una por una en popups
var n = prompt("Muéstrame la tabla de multiplicar del...");

for(let i = 0; i <= 10; i++){
    if(n === "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"){
        alert(n + " x " + i + " = " + n*i);
    }else{
        alert("sólo números del 1 al 10, por favor");
    }
}
 //solución
let numero;
let i = 0;

while(i < 1){
    
    numero = prompt("Muéstrame la tabla de multiplicar del...");

    if(numero > 0 && numero < 11){
        
        for(let i = 1; i <= 10; i++){
            console.log(numero + " x " + i + " = " + numero*i);
        };
        
        i++;

        }else{
            alert("sólo números del 1 al 10, por favor");
    };
};*/