"use strict"

//JSON
const miJson = {
    nombre: "Elena",
    apellido: "Rocha",
    email: "ele_r.v@gmail.com",
};
/*
console.log(miJson.email, miJson.nombre, miJson.apellido);

//JSON con JSONs
const usuarios ={
    usuario1:{
        nombre: "Pepe",
        apellido: "Palomo",
        email: "pepe_p.p@gmail.com",
        direccion: {
            calle: "Palomera",
            ciudad: "Madrid",
            pais: "España",
        },
    },
    usuario2:{
        nombre: "Pepa",
        apellido: "Paloma",
        email: "pepa_p.pa@gmail.com",
        direccion: {
            calle: "Palomero",
            ciudad: "Madrid",
            pais: "España",
        },
    },
};

let div = document.querySelector(".user");

//recorrer JSON multicapa
function mostrarEnHTML(j){
    let arrayJson = [];
    arrayJson = j;

    let ul = document.createElement("ul");

    let i;
    for(i in arrayJson){
        let li = document.createElement("li");
        li.innerHTML = `<p><strong>Nombre:</strong>${arrayJson[i].nombre}</p>
                        <p><strong>Apellido:</strong>${arrayJson[i].apellido}</p>
                        <p><strong>Email:</strong>${arrayJson[i].email}</p>
                        <p><strong>Calle:</strong>${arrayJson[i].direccion.calle}</p>
                        <p><strong>Ciudad:</strong>${arrayJson[i].direccion.ciudad}</p>
                        <p><strong>Pais:</strong>${arrayJson[i].direccion.pais}</p>
                        ` 
        li.style.listStyle = "none";
        ul.appendChild(li);
        div.appendChild(ul);
    };
};

mostrarEnHTML(usuarios);

//crear sesión
let userString = JSON.stringify(miJson);
localStorage.setItem("usuario", userString);
let loginUser = localStorage.getItem("usuario");
console.log(JSON.parse(loginUser));*/

//acceso sencillo
//si ya tenemos un Json, accedemos a sus valores asi
let {nombre, apellido} = miJson;
console.log(nombre);

//más sencillo todaví, incluso para construir el Json
let nombre = "Elena",
    apellido = "Rocha",
    email = "ele_r.v@gmail.com",
    calle = "Palomera",
    ciudad = "Villalba",
    nombreConyuge = "Horse",
    apellidoConyuge = "Luis";

const user = {nombre, apellido, email, direccion:{calle, ciudad}, conyuge:{nombreConyuge, apellidoConyuge}};