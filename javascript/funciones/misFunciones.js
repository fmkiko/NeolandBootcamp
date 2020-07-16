"use strict"

function saludar(){
    console.log("Hola mundo!")
};

function setUser(nombre, apellido, correo){
    
        console.log("Nombre es: " + nombre);
        console.log("Apellido: " + apellido);
        console.log("Correo: " + correo);
   
}

function sumar(n1,n2){

    let sumar = n1 + n2 ;

    return sumar;// Devulve el resultado de la suma

}

//incluye valores por defecto, por si alguna de las variables queda vacía
function sumar2( n1 = 1, n2 = 1, n3 = 1 ){
    let s = n1 + n2 + n3
    return s ;
}

function mult(n1 ,n2, n3){

  let m = n1*n2*n3;

  return m;  

}

function checkField(field){
    if (field == ""){
      
       return false;

    }else{
       
       return true;

    }
}

function cualMasGrande( n1, n2 ){ 

    if( n1 > n2 ){

        return "Este es el más : " + n1;

    }else if( n2 > n1 ){

        return "Este es el más : " + n2;

    }else{

        return "Son iguales";
        
    }

}

function coches(n, ...coches){
    console.groupCollapsed(n);
    console.log(coches);
}

function listaCompra(n1, n2, n3, n4){
    console.log(n1);
    console.log(n2);
    console.log(n3);
    console.log(n4);
}

function miIsNaN(n){

    if (typeof n != "number" ){
        return true;
    }else{
        return false;
    }
}