"use strict"

//declarar una promesa
const promesa = new Promise(function(resolve, reject){
    console.log("Pendiente");
    if(true){
        resolve("Hola desde una promesa");
    }else{
        reject("Error");
    };
});

//ejecutar una promesa
promesa
    .then(datos => {
        console.log(datos);
    })
    .catch(error => {
        console.log(error);
    })

//crea una función que pasandole un JSON devuelva una promesa, la cual comprueba si el JSON es un string en un timeout de 3000.
const user = {
    nombre: "Elena",
    apellido: "Rocha",
    email: "ele_r.v@gmail.com",
};

function getDatos(datos){
    return new Promise(function(resolve, rejesct){
        setTimeout(function(){
            if(typeof datos != "string"){
                reject("Error de datos");
            }else{
                resolve("Datos OK");
            };
        }, 3000);
    });
};

//si el resultado es favorable, campuralo con otro then y almacenalo en el localStorage
/*getDatos(user)
    .then(response =>{
        console.log(response);
    })
    .catch(error =>{
        console.log(error);
    })
*/

getDatos(JSON.stringify(user))
    .then(response =>{
        console.log(response);
        return response;
    })
    .then(datos =>{
        localStorage.setItem("usuario", datos);
    })
    .catch(error =>{
        console.log(error);
    })