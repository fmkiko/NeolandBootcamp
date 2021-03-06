"use strict"

class Pokemon{
    constructor(pokemonName){
        this._name = pokemonName;
    };
    get name(){
        return this._name;
    };
    get life(){
        return this._life;
    };
    get attack(){
        return this._attack;
    };
    get defense(){
        return this._defense;
    };
};

class TipoElectrico extends Pokemon{
    constructor(pokemonName){
        super(pokemonName)
        this._life = 100;
        this._attack = 65;
        this._defense = 10;
    };
    
};
class TipoAgua extends Pokemon{
    constructor(pokemonName){
        super(pokemonName)
        this._life = 100;
        this._attack = 45;
        this._defense = 30;
    };
};
class TipoPlanta extends Pokemon{
    constructor(pokemonName){
        super(pokemonName)
        this._life = 100;
        this._attack = 35;
        this._defense = 40;
    };
};
class TipoFuego extends Pokemon{
    constructor(pokemonName){
        super(pokemonName)
        this._life = 100;
        this._attack = 55;
        this._defense = 20;
    };
};

function createFighter(pokemon1){
    document.getElementById("caracteristics-fighter").innerHTML = `<div><h2 class="minor-title">Características:</h2><p class="new-caracteristics">Nombre: ${pokemon1.name}<br>Vida: ${pokemon1.life}<br>Ataque: ${pokemon1.attack}<br>Defensa: ${pokemon1.defense}</p></div>`
};

function createRival(pokemon2){
    document.getElementById("caracteristics-rival").innerHTML = `<div><h2 class="minor-title">Características:</h2><p class="new-caracteristics">Nombre: ${pokemon2.name}<br>Vida: ${pokemon2.life}<br>Ataque: ${pokemon2.attack}<br>Defensa: ${pokemon2.defense}</p></div>`
};

function chooseFighter (){
    let pokemonNameF = document.getElementById("choose-your-fighter").value;

    let myPokemonF = pokemonNameF.toLowerCase();


    if(myPokemonF === "pikachu"){
        let pokemon1 = new TipoElectrico(pokemonNameF);
        createFighter(pokemon1);
        return pokemon1;
    };

    if(myPokemonF === "squirtle"){
        let pokemon1 = new TipoAgua(pokemonNameF);
        createFighter(pokemon1);
        return pokemon1;
    };

    if(myPokemonF === "bulbasur"){
        let pokemon1 = new TipoPlanta(pokemonNameF);
        createFighter(pokemon1);
        return pokemon1;
    };

    if(myPokemonF === "charmander"){
        let pokemon1 = new TipoFuego(pokemonNameF);
        createFighter(pokemon1);
        return pokemon1;
    };
    
};

function chooseRival (){
    let pokemonNameR = document.getElementById("choose-your-rival").value;

    let myPokemonR = pokemonNameR.toLowerCase();

    if(myPokemonR === "pikachu"){
        let pokemon2 = new TipoElectrico(pokemonNameR);
        createRival(pokemon2);
        return pokemon2;
    };

    if(myPokemonR === "squirtle"){
        let pokemon2 = new TipoAgua(pokemonNameR);
        createRival(pokemon2);
        return pokemon2;
    };

    if(myPokemonR === "bulbasur"){
        let pokemon2 = new TipoPlanta(pokemonNameR);
        createRival(pokemon2);
        return pokemon2;
    };

    if(myPokemonR === "charmander"){
        let pokemon2 = new TipoFuego(pokemonNameR);
        createRival(pokemon2);
        return pokemon2;
    };
    
};


function ranNumber(){
    return Math.floor((Math.random()*10)+1);
};

function hit(){
    return pokemon2.attack - pokemon1.defense;
};

function reciveAtatack (){
    
    let turno = ranNumber();

    console.log(typeof pokemon1);
    
    if(turno < 10){
        let damage = pokemon1.life - hit();
        return damage
    };
};

function showWinner(){
    let wings = document.querySelector(".corner");

    let center = document.querySelector(".explanation");

    let boton = document.querySelector(".btn");

    if(pokemon1.life > pokemon2.life){
            return pokemon1.name
    };
    if(pokemon1.life < pokemon2.life){
            return pokemon2.name
    };

    wings.style.display = "none";

    boton.style.display = "none";
    
    center.innerHTML = `Ha ganado ${winner}`;
};

function fight (){

    do{
        reciveAtatack();
    }while(damage <= 0);

   showWinner();
};