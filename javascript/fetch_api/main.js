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
    })*/

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
                    <p>${foto}</p>`;
    info.appendChild(div);

};