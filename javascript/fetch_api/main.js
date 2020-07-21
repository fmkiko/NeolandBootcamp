"use strict"

/*fetch("https://randomuser.me/api/?results=1")
    .then(response => {
        return response.json();//podemos prescindir del return
    })
    .then(datos => {
        console.log(datos);
    })
    .catch(error =>{
        console.log(error);
    })

let button = document.querySelector(".btn");
let info = document.querySelector(".information");

button.addEventListener("click", apiSet)

function apiSet(){
    fetch("https://randomuser.me/api/?results=1")
        .then(response => {
            return response.json();
        })
        .then(datos => {
            mostrarHTML(datos);
        })
        .catch(error =>{
            console.log(error);
        })
};

function mostrarHTML(datos){
    let data = datos.results[0];
    console.log(data);
    let nombre = data.name.first;
    let apellido = data.name.last;
    let foto = data.picture.medium;
    let div = document.createElement("div");
    div.innerHTML = `<p>${nombre}</p>
                    <p>${apellido}</p>
                    <img src="${foto}">`;
    info.appendChild(div);

};

let info = document.querySelector(".information");

function getUsers (){
    for(let i = 1; i < 11; i++){
        fetch ("https://randomuser.me/api/?results=1")
    
        .then(response => response.json())
        .then(datos => {
            imprimirHTML(info, datos);
            //console.log(datos);
        })
        .catch(error => console.log(error))
    };
};


function imprimirHTML(info, datos){
    let div = document.createElement("div");
    let data = datos.results[0];
    div.innerHTML = data.name.first;
    info.appendChild(div);
};*/

function get10Users (){
    for(let i = 1; i < 11; i++){
        fetch ("https://randomuser.me/api/?results=1")
    
        .then(response => response.json())
        .then(datos => {
            console.log(datos);
        })
        .catch(error => console.log(error))
    };
};

//modificar la response de la url
let numero = prompt("¿Cuántos usuarios necesitas?");

getUser(numero);

function getUser(numero){
    fetch (`https://randomuser.me/api/?results=${numero}`)
    
        .then(response => response.json())
        .then(datos => {
            console.log(datos);
        })
        .catch(error => console.log(error))
};