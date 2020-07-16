"use strict"

/*crear array
var myArray = ["Pepe", "Juan", "María"];
var var2 = myArray[1];//acceder a los valores del array
console.log(var2);
console.log(myArray.length);//parea saber la cantidad de datos de un array
*/

/*concatenando arrays
var myArray2 = new Array("Ferrari", "Porsche", "Mustang" )
var con = myArray.concat(myArray2)
console.log(con)
*/

/*unir los valores separándolos con determinado símbolo
var union = myArray.join("/");
console.log(union);
*/

/*eliminar el último valor del array
var borrado = myArray.pop();
console.log(borrado);
console.log(myArray);
*/

/*añadir elementos al array
myArray.push("Luis");
console.log(myArray);
*/

/*array multidimensional
let arr1 = ["Ensalada", "Sopa"];
let arr2 = ["Filete", "Macarrones"];
let arr3 = ["Flan", "Manzana"]

let arrMulti = [arr1,arr2,arr3];

let plato = arrMulti[0][1];

//console.log(plato);

for(let m = 0; m < arrMulti.length; m++){
    
    console.log(m+1 + " - Plato")
    for(let i = 0; i < arrMulti[m].length; i++){//arrMulti[0] o [1] o [2]
        console.log(arrMulti[m][i]);
    }
}*/

/*
//funciones
function arrayMulti(arrMult){

    for(let m = 0; m < arrMult.length; m++){
    
        console.log(m+1 + " " + titulo)
        
        for(let i = 0; i < arrMult[m].length; i++){//arrMulti[0] o [1] o [2]
            console.log(arrMult[m][i]);
        }
    }
};


//usar funciones
let arr1 = ["Ensalada", "Sopa"];
let arr2 = ["Filete", "Macarrones"];
let arr3 = ["Flan", "Manzana"]

let arrMult = [arr1,arr2,arr3];

let plato = arrMult[0][1];

let titulo = "- plato"

console.log("******Menú******")
arrayMulti(arrMult)

//métodos avanzados
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers.map((currentValue, index, arr) => {
    let newValue = currentValue*4;
    console.log("El número multiplicado por 4 es igual a" + newValue);
});


const ages = [37, 8, 15, 29, 40, 3, 44, 59, 70, 1];

let adult = ages.filter((currentValue, index, arr) => currentValue >= 18);
console.log(adult);

let underAged = ages.filter((currentValue, index, arr) => currentValue < 18);
console.log(underAged);


const grades = [12.15, 18.2, 46.99, 20.20, 39.4, 22.6, 36.36, 1.88, 4.5, 100.1];

const gradesReduced = grades.reduce((total, current, index, arr) => Math.round(current + total));

console.log(gradesReduced);*/