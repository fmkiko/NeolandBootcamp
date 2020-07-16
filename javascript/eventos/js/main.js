"use strict"

/*
let caja = document.querySelector(".caja");

//opción farragosa
caja.addEventListener("click", function(){
    console.log("Pulsado");
});

//opción elegante
function clickCaja(){
    console.log("Pulsado");
};

caja.addEventListener("click", clickCaja);

//key logger
const myLog = [];

const name = document.querySelector(".name");

name.addEventListener("keydown", event =>{
    myLog.push(name);
    console.log(myLog);
});

//botón alert
let button = document.querySelector("#btn1");

button.addEventListener("click", function(){
    alert("Pulsado");
});

//botón estilos
let button2 = document.querySelector("#btn");
let mainTitle = document.querySelector("h1");

button2.addEventListener("click", function(){
    mainTitle.style.color = "red";
});

//caja color
let caja = document.querySelector(".caja");

caja.addEventListener("mouseover", function(){
    caja.style.backgroundColor = "yellow";
});

caja.addEventListener("mouseout", function(){
    caja.style.backgroundColor = "green";
});

//cambiar estilos
mainTitle.style.color = "blue";*/

//campo no vacío
const myLog = [];

const formulario = document.querySelector(".name");

formulario.addEventListener("keydown", event =>{
     
    if(event.key !== " "){
        myLog.push(event.key);
        console.log(myLog);
    }
});