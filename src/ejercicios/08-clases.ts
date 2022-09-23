/*
    ===== Código de TypeScript =====

*/

class PersonaNormal {
    constructor(public nombre: string, public direccion: string) {
    }
}


class Heroe extends PersonaNormal {

    private alterEgo: string;
    public edad: number;
    static nombreReal: number;

    constructor(public nombreReal: string) {
        super(nombreReal, 'New York,USA');

    }

}

//const Spiderman = new Heroe('SpiderMan', 25, 'peter');

//console.log(Spiderman);
