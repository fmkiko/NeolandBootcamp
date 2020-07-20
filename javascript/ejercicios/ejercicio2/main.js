"use strict"

function cambiarColor(color){

    const nivelBajo = document.getElementById("bajo");
    const nivelMedio = document.getElementById("medio");
    const nivelALto = document.getElementById("alto");
    
    if(color === "red"){
        nivelBajo.style.backgroundColor = color;
    };

    if(color === "yellow"){
        nivelBajo.style.backgroundColor = color;
        nivelMedio.style.backgroundColor = color;
    };

    if(color === "green"){
        nivelBajo.style.backgroundColor = color;
        nivelMedio.style.backgroundColor = color;
        nivelALto.style.backgroundColor = color;
    };
};

function nivelar(){

    const pass = document.querySelector(".password").value;

    console.log(pass);

    const letras = /[a-z]+/;
    const numeros = /[0-9]+/;
    const mayusculas = /[A-Z]+/;
    const longitud = pass.length;

    if(letras !== -1 || numeros !== -1 || longitud < 8){
        cambiarColor("red");
    };
    
    if(letras !== -1 && numeros !== -1 && longitud <= 15){
        cambiarColor("yellow");
    };
    
    if(letras !== -1 && numeros !== -1 && mayusculas !== -1 && longitud > 15){
        cambiarColor("green");
    };
};