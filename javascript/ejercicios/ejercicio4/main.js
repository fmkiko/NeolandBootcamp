"use strict"

const sectContainer = document.querySelector("#contenedor-pokemons");

getPokemon(ranNumber());

getPokemon(ranNumber());

function getPokemon(pokemon){
    fetch(`https://pokeapi-215911.firebaseapp.com/api/v2/pokemon/${pokemon}`)
        .then(response => response.json())
        .then(datos => {
            imprimirHTML(sectContainer, datos);
        })
        .catch(error => console.log(error))
};

function imprimirHTML(sectContainer, datos){
    
    /*console.log(datos);
    console.log(datos.species);
    console.log(datos.species.name);
    console.log(datos.sprites.front_default);*/

    let btn = document.createElement("button");
    btn.setAttribute("id", datos.species.name);
    btn.innerHTML = "Alimentar";

    let div = document.createElement("div");
    let h1 = document.createElement("h1");
    h1.innerHTML = datos.species.name;
    let img = document.createElement("img");
    img.setAttribute("src", datos.sprites.front_default);
    div.appendChild(h1);
    div.appendChild(img);
    div.appendChild(btn);
    sectContainer.appendChild(div);

    btn.addEventListener("click", alimentar);
};

function ranNumber(){
    return Math.floor((Math.random()*50)+1);
};

function alimentar(){
    alert("alimentar " + this.getAttribute("id"));
};