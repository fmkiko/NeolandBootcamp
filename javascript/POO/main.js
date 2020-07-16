"use strict"

/*const lampara = {
    color: "verde",
    altura: 30,
    cable: true,
    encender: function() {
        console.log("Luz");
    },
    apagar: function() {
        console.log("Oscuro");
    },
};


// Acceder a la propiedad de un objeto --> dot notation (notación de punto)
// nombreDelObjeto.propiedad
// nombreDelObjeto.método()


//Constructores --> Función que crea objetos
function Lampara() {
    this.color = "verde";
    this.altura = 30;
    this.cable = true;
    this.encender = function() {
        console.log("Luz");
    };
    this.apagar = function() {
        console.log("Oscuro");
    };
};

//this. hace referencia al contexto en el que se encuentra

let deNoche = new Lampara(); // Instanciar un objeto. Esto es una instancia del constructor Lampara.

//instanceof - Para saber si un objeto es instancia de un Constructor
console.log("¿deNoche es instancia de Lampara?", deNoche instanceof Lampara);
console.log("¿lampara es instancia de Lampara?", lampara instanceof Lampara);

// Constructores con parámetros
function Lampara(color, altura) {
    this.color = color;
    this.altura = altura;
    this.cable = true;
    this.encender = function() {
        console.log("Luz");
    };
    this.apagar = function() {
        console.log("Oscuro");
    };
};

let dePie = new Lampara("blanco", 180);


// own properties (propiedades de él mismo)
let deEscritorio = new Lampara("negro", 20);

// Para saber si una propiedad es ownProperty podemos usar el método ".hasOwnProperty()"
for (let property in deNoche) {
    if(deNoche.hasOwnProperty(property)) {
        console.log("La own property es ", property);
    };
};


// protypes --> Las propiedades que están en el prototipo de un constructor se comparten en todas las instancias del constructor

function Lampara(color, altura) {
    this.color = color; // own property
    this.altura = altura; // own property
};

Lampara.prototype.cable = true; // Añadimos una prototype property

let deNoche = new Lampara("verde", 30);


// Propiedad Constructor - Constructor Property
// Todos los objetos instanciados tienen una propiedad especial llamada constructor, que es una referencia a la función constructor que generó la instancia. Nos sirve para ver qué tipo de objeto es.
// La propiedad constructor puede ser sobrescrita. Por eso, es mejor utilizar instanceof


// Podemos establecer el prototype con un objeto que ya contiene las propiedades. Añadimos todos de golpe

function Lampara(color, altura) {
    this.color = color; // own property
    this.altura = altura; // own property
};

Lampara.prototype = {
    cable: true,
    encender: function() {
        console.log("Luz");
    },
    apagar: function() {
        console.log("Oscuro");
    },
};
// Si lo hacemos de esta forma (setear el prototype con un objeto) nos estamos cargando el objetoInstanciado.constructor
let deNoche = new Lampara("verde", 30);



// Establecer el protype con un objeto sin cargarnos el objetoInstanciado.constructor
function Lampara(color, altura) {
    this.color = color; // own property
    this.altura = altura; // own property
};

Lampara.prototype = {
    constructor: Lampara,
    cable: true,
    encender: function() {
        console.log("Luz");
    },
    apagar: function() {
        console.log("Oscuro");
    },
};

// Un objeto hereda su prototype de la función que lo ha instanciado
Lampara.prototype.isPrototypeOf(dePie); // Permite comprobar si un objeto es protipo del prototipo de la función creadora


// Todos los objetos en JS (salvo alguna excepción) tienen prototype. El propio objeto prototype es un objeto

//dePie.hasOwnProperty(property);

// supertype (supertipo) - subtype (subtipo)
// Cadena de prototipos
// EN JS CASI TODO ES UN OBJETO, porque su función constructora original o base es Object()

// DRY - Don´t Repeat Yourself

function Iluminador() {}

Iluminador.prototype = {
    constructor: Iluminador,
    patas: 4,
    montar: function() {
        console.log("hagase la luz!!");
    },
};

function Lampara(color, altura) {
    this.color = color; // own property
    this.altura = altura; // own property
};

function Linterna(color, largo) {
    this.color = color; // own property
    this.mlargo = largo; // own property
};

Lampara.prototype = {
    constructor: Lampara,
};

Linterna.prototype = {
    constructor: Linterna,
};


let iluminador = new Iluminador(); // Forma 1 de instanciar un objeto
let iluminador = Object.create(Iluminador.prototype); // Forma 2 de instanciar un objeto


// Cómo hacer que un subtype utilice el prototype de su supertype
function Iluminador() {}

Iluminador.prototype = {
    constructor: Iluminador,
    bombilla: true,
    encender: function() {
        console.log("Luz");
    },
    apagar: function() {
        console.log("Oscuro");
    }
};

function Lampara(color, altura) {
    this.color = color; // own property
    this.altura = altura; // own property
};

function Linterna(color, largo) {
    this.color = color; // own property
    this.largo = largo; // own property
};

Lampara.prototype = Object.create(Lampara.prototype);
Linterna.prototype = Object.create(Linterna.prototype);
// La fórmula para conseguir que un objeto herede sus métodos de otro objeto gracias al prototype es:
// ChildObject.prototype = Object.create(ParentObject.prototype);

let deMesa = new Lampara("azul", 10); // Lampara ahora tiene acceso a todas las propiedades y métodos de Iluminador
let fluorescente = new Linterna("trasparente", 15); // Linterna ahora tiene acceso a todas las propiedades y métodos de Iluminador

function Iluminador() {}

Iluminador.prototype = {
    constructor: Iluminador,
    bombilla: true,
    encender: function() {
        console.log("Luz");
    },
    apagar: function() {
        console.log("Oscuro");
    }
};

function Lampara(color, altura) {
    this.color = color; // own property
    this.maltura = altura; // own property
    this.encender = function() {
        console.log("Chas");
    };
};

function Linterna(color, largo) {
    this.color = color; // own property
    this.largo = largo; // own property
    this.manivelaCarga = function() {
        console.log("Ris, ris");
    };
};

Lampara.prototype = Object.create(Iluminador.prototype);
Linterna.prototype = Object.create(Iluminador.prototype);

// Añadimos el constructor de los objetos haciendo referencia a su función constructora
Lampara.prototype.constructor = Lampara;
Linterna.prototype.constructor = Linterna;

// Podemos añadir métodos específicos a un constructor. En este caso linterna tiene un comportamiento específico que manivelaCarga.
// Lampara, sin embargo, no tiene este comportamiento, aunque ambos heredan el prototype de Iluminaodr
Linterna.prototype.manivelaCarga = function() {
    console.log("Ris, ris");
};

let deMesa = new Lampara("azul", 20); // deMesa ahora tiene acceso a todas las propiedades y métodos de Ilumiandor
let fluorescente = new Linterna("trasparente", 15); // fluorescente ahora tiene acceso a todas las propiedades y métodos de Iluminador
let llavero = new Linterna("rojo", 5);


// Sobrescribir un método heredado
// JS va buscando el método al que llamamos comenzando por lo más concreto (subtype) y subiendo a los distintos niveles de los supertype, hasta llegar al nivel más alto Object()


// Tenemos objetos que comparten alguna acción (método) pero no tienen ninguna relación: pájaro y avión
// Solución: Utilizar MIXINS

// Lo que hace la siguiente función es asignar al objeto que recibe como parámetro un método llamado "volar"
let mixinVolar = function(objetoAlQueQuieroAnadirElMixin) {
    objetoAlQueQuieroAnadirElMixin.volar = function() {
        console.log('¡Estoy volandoooooo!');
    };
};

let pajaro = {
    color: 'amarillo',
    edad: '1'
};

let avion = {
    color: 'Blanco',
    numPasajeros: 230
};

mixinVolar(pajaro);
mixinVolar(avion);

// Anexo: Formas de utilizar funciones en variables
let saludar = function(name) {
    console.log('Hola ', name);
};
// lo anterior es similar a:
function saludar(name) {
    console.log('Hola ', name);
};

// saludar('Pepe');


//clousure, proteger las propiedades de un objeto
function Lampara(){
    let interruptor = "on";

    this.color = "verde";
    this.altura = 30;
    this.encender = function(){
        console.log("Luz");
    };
    this.apagar = function(){
        console.log("Oscuro");
    };
    this.verInterruptor = function (){
        return interruptor;
    };
};

let deNoche = new Lampara();

// Creando un nuevo tipo de objeto para mis monovolúmenes
// 1. Genero mi función constructora (constructor)
function Monovolumen(plazas) {
    this.plazas = plazas;  // own property
};

// Tipos de propiedades:
// own properties
// prototype properties

// 2. Hacer que Monovolumen herede el prototipo de su supertype (Coche)
Monovolumen.prototype = Object.create(Coche.prototype);
Monovolumen.prototype.constructor = Monovolumen;

// 3. Instaciar un objeto tipo Monovolumen
let picasso = new Monovolumen(6);
*/

function Mueble() {}

Mueble.prototype = {
    constructor: Mueble,
    habitacion: "salón",
    estilo: "retro",
    montar: function(){
        console.log("Mueble nuevo!!");
    },
};

function Almacenamiento(){}

Almacenamiento.prototype = Object.create(Mueble.prototype);
Almacenamiento.constructor = Almacenamiento;
Almacenamiento.prototype.material = "madera";

function Asiento(){}

Asiento.prototype = Object.create(Mueble.prototype);
Asiento.constructor = Asiento;
Asiento.prototype.material = "madera";
Asiento.prototype.recubrimeinto = "tela";

function Silla(estampado) {
    let descuento = "50%";
    
    this.estampado = estampado;

    this.verDescuento = function(){
        return descuento;
    };
};

Silla.prototype = Object.create(Asiento.prototype);
Silla.constructor = Silla;

function Sofa(plazas) {
    this.estampado = "liso";
    this.plaza = plazas;
};

Sofa.prototype = Object.create(Asiento.prototype);
Sofa.constructor = Sofa;

let butaca = new Silla("floreado");

//notación actualizada
class Pizza{
    constructor(tamaño){
        this.masa = true;
        this.salsa = "tomate";
        this.tamaño = tamaño;
    };
    montar(){
        console.log("tenemos la pizza")
    };
    static desechar(){
        console.log("salió mala");
    };
};

let basica = new Pizza();

class Margarita extends Pizza{
    constructor(tamaño, topping){
        super(tamaño);
        this._ingredientePrincipal = "queso";
        this.topping = topping;
    };
    cortar(porciones){
        console.log("hay " + porciones + " porciones");
    };
    get ingredientePrincipal(){
        return this._ingredientePrincipal;
    };
    set ingredientePrincipal(ingrediente){
        this._ingredientePrincipal = ingrediente;
    };
};

let miMargarita = new Margarita("pequeña", "albahaca");