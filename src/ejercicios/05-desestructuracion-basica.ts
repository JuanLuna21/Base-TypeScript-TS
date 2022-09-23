/*
    ===== Código de TypeScript =====

*/
interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}


interface Detalles {
    autor: string;
    anio: number;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Mess',
    detalles: {
        anio: 2015,
        autor: 'Ed Sheeran'
    }
}

/*

    Desestructuracion de objetos.

*/
/*
const { volumen, segundo, cancion, detalles } = reproductor; // acá se usan llaves, y se hace por nombres.
const { autor } = detalles;

/*
console.log('El volumen actual de: ', volumen);
console.log('El segundo actual de: ', segundo);
console.log('El cancion actual de: ', cancion);
console.log('El autor actual de: ', autor);
*/

/*

    Desestructuracion de arreglos.

*/


const dbz: string[] = ['Goku', 'Vegeta', 'Trunks']; // acá se usa por llaves cuadradas y se hace por posicion.

const [p1, p2, p3] = dbz;
//const [, , p3] = dbz; sí solo quiero la posicion unica.

console.log('Personaje 1: ', p1);
console.log('Personaje 2: ', p2);
console.log('Personaje 3: ', p3);
