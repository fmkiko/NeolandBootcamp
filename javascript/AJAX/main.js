"use strict"

/*
//crear el objeto
const xhr = new XMLHttpRequest();

//conexión con backend
xhr.open("GET", "https://randomuser.me/api/?results=1");

//consultar
xhr.onreadystatechange = function (){
    //console.log(xhr.readyState);
    //console.log(xhr.status);
    
    //comprobar que la conexión es ok
    if(xhr.readyState === 4 && xhr.status === 200){
        //console.log("conexión ok");
        //console.log(JSON.parse(xhr.response));

        //parsear
        let datos = JSON.parse(xhr.response).results[0];
        //console.log(datos.name.first);
        
        //recoger propiedades
        let {name:{title, first, last}, picture:{medium}} = datos;
        //console.log(title, first, last, medium);
        
        //mostrar en HTML
        document.querySelector(".user").innerHTML = `<p>Título: ${title}</p>
                                                    <p>Nombre: ${first}</p>
                                                    <p>Apellido: ${last}</p>
                                                    <img src="${medium}">
                                                    `
    };
};

xhr.send();

//onload, se lanza sólo cuando alcanza el estado 4
const xhr = new XMLHttpRequest();

xhr.open("GET", "https://randomuser.me/api/?results=1");

xhr.onload = function (){
    console.log(xhr.readyState);
    console.log(xhr.status);
};

xhr.send();
*/

//introducir datos
const datos = {
    nombre: "Elena",
    apellido: "Rocha"
};

const xhr = new XMLHttpRequest();

xhr.open("POST", "https://reqres.in/api/users");
xhr.setRequestHeader("Content.type", "application/json");//“Content.type”,”application/x-www-form-urlencoded”

xhr.onload = function(){
    
    if(xhr.status === 201){
        console.log(xhr.response);
    };
};

xhr.send(JSON.stringify(datos));