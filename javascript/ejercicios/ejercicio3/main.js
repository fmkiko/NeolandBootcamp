"use strict"
class Pokemon{
    constructor(){
        this.life = 100;
        this.attack = 100;
        this.defense = 100;
        this._level = 1;
    };
    set level(nivel){
        this._level = nivel;
    };
    hit(rival){
        rival.setLife = rival.life - (this.attack-rival.defense);
    };
    static fight(rival){
        if(turn){
            do{
                hit(rival);
            }while (rival.life !== 0);
        };
    };
};

class TipoElectrico extends Pokemon{
    constructor(){
        super()
    };
};
class TipoAgua extends Pokemon{
    constructor(){
        super()
    };
};
class TipoPlanta extends Pokemon{
    constructor(){
        super()
    };
};
class TipoFuego extends Pokemon{
    constructor(){
        super()
    };
};

let pikachu = new TipoElectrico;
let squirtle = new TipoAgua;
let bulbasur = new TipoPlanta;
let charmander = new TipoFuego;