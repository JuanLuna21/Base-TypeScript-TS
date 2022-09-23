/*
    ===== Código de TypeScript =====

*/

interface Pasajero {
    nombre: toString;
    hijos?: string[];
}

const Pasajero1: Pasajero = {
    nombre: 'Fernando'
}

const Pasajero2: Pasajero = {
    nombre: 'Melisa',
    hijos: ['Natalia', 'Gabriel']
}

function imprimeHijos(pasajero: Pasajero): void {
    const cuantosHijos = pasajero.hijos?.length || 0;
    console.log(cuantosHijos);
}
imprimeHijos(Pasajero1);
imprimeHijos(Pasajero2);