/*
    ===== Código de TypeScript =====
*/



/*function sumar(a: number, b: number): number {
return a + b;
}


const sumarFlecha = (a: number, b: number): number => {
    return a + b;
}

//obligatorio //opcional            //defecto
function multiplicar(numero: number, otroNumero?: number, base: number = 2): number {
    return numero * base;
}

const resultado2 = multiplicar(5, 10);

const resultado = sumar(23, 56);

//console.log(resultado);
*/

interface PersonajeLOR {

    nombre: string;
    pv: number;
    mostrarHp: () => void;
}

function curar(personaje: PersonajeLOR, curarX: number): void { // si no retorno nada.

    personaje.pv += curarX;

    //console.log(personaje);

}

const nuevoPersonaje: PersonajeLOR = {
    nombre: 'Strider',
    pv: 50,
    mostrarHp() {
        console.log('Puntos de vida: ', this.pv)
    }

}

curar(nuevoPersonaje, 20);

nuevoPersonaje.mostrarHp();