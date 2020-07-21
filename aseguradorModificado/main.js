"use strict"

function cambiarColor(color){

    const nivelBajo = document.getElementById("bajo");
    const nivelMedio = document.getElementById("medio");
    const nivelALto = document.getElementById("alto");
    
   
   console.log(color)
    if( color === "white"){
        nivelBajo.style.backgroundColor = color;
    }
    if(color === "red"){
        nivelBajo.style.backgroundColor = color;
        nivelMedio.style.backgroundColor = "white";
    };

    if(color === "yellow"){
        nivelBajo.style.backgroundColor = color;
        nivelMedio.style.backgroundColor = color;
        nivelALto.style.backgroundColor = "white";
    };

    if(color === "green"){
        nivelBajo.style.backgroundColor = color;
        nivelMedio.style.backgroundColor = color;
        nivelALto.style.backgroundColor = color;
    };
};

function nivelar(){

    const pass = document.querySelector(".password").value;

    const letras = /[a-z]+/.test(pass);
    const numeros = /[0-9]+/.test(pass);
    const mayusculas = /[A-Z]+/.test(pass);
    const longitud = pass.length;
   console.log(longitud)

    if(((letras || numeros ) && longitud < 8 && longitud < 15)){
        cambiarColor("red");
    }
    if((letras && numeros) || (longitud <= 15 && longitud > 8)){
        cambiarColor("yellow");
    }
    if( (letras && numeros && mayusculas) || longitud > 15){
        cambiarColor("green");
    }
    if(longitud <= 0){
        cambiarColor("white");
    };
};