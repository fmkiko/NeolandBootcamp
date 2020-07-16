/*document.write
let loVisto = [];

let nuevoTema;

do{

    nuevoTema = prompt("¿Qué hemos visto hoy?");
    
    if(nuevoTema != null){
        loVisto.push(nuevoTema);
    }

}while(nuevoTema != null);

//loVisto.pop(nuevoTema);

document.write("<h1>Curso JavaScript</h1>");

document.write("<ul>");

for(let i = 0; i < loVisto.length; i++){
    document.write("<li>" + loVisto[i] + "</li>");
}

document.write("</ul>");*/

/*plantillas
let plantilla = `
                <div class="show">
                    <h1>Hola mundo</h1>
                </div>
                <div>
                    <h2>Bienvenido!!</h2>
                </div>
                `
document.write(plantilla);*/

//mi plantilla
let plantilla = `<div class="show">
                    <div>
                        <img class="logo" src="javascript-736400_640.png">
                        <h1>Bienvenidos al curso de JavaScript</h1>
                    </div>
                </div>
                `;
document.write(plantilla);