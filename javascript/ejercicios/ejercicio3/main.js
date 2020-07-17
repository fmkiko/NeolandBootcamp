"use strict"

class Pokemon{
    constructor(){
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
    constructor(){
        super()
        this._life = 100;
        this._attack = 40;
        this._defense = 20;
    };
};
class TipoAgua extends Pokemon{
    constructor(){
        super()
        this._life = 100;
        this._attack = 20;
        this._defense = 40;
    };
};
class TipoPlanta extends Pokemon{
    constructor(){
        super()
        this._life = 100;
        this._attack = 10;
        this._defense = 50;
    };
};
class TipoFuego extends Pokemon{
    constructor(){
        super()
        this._life = 100;
        this._attack = 30;
        this._defense = 30;
    };
};

function chooseFighter (){
    let myPokemon = document.getElementById("chooseYourFighter").value;

    let myPokemon = pokemonName.toLowerCase();

    if(myPokemon = "pikachu"){
        let pikachu = new TipoElectrico;
        document.getElementById("caracteristics-left").innerHTML = ´´
    };

    if(myPokemon = "squirtle"){
        let squirtle = new TipoAgua;
    };

    if(myPokemon = "bulbausr"){
        let bulbasur = new TipoPlanta;
    };

    if(myPokemon = "charmander"){
        let charmander = new TipoFuego;
    };
    
};

function chooseRival (){
    let pokemonName = document.getElementById("chooseYourRival").value;

    let myPokemon = pokemonName.toLowerCase();

    if(myPokemon = "pikachu"){
        let pikachu = new TipoElectrico;
    };

    if(myPokemon = "squirtle"){
        let squirtle = new TipoAgua;
    };

    if(myPokemon = "bulbausr"){
        let bulbasur = new TipoPlanta;
    };

    if(myPokemon = "charmander"){
        let charmander = new TipoFuego;
    };

    //cómo hago para que si escribe otro nombre le 
    
};

let turn = Math.floor(Math.random()*10);

let hit = pokemon2.attack() - pokemon1.defense();

function reciveAtatack (){
    if(turn < 10){
        let damage = pokemon1.life() - hit;
        return damage
    };
};

function combat (){
    do{
        reciveAtatack();
    }while(damage > 0);
};