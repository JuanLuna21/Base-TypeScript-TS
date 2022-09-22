/*
    ===== Código de TypeScript =====
*/


let habilidades = ['Bash', 'Counter', 'healing'];

//habilidades.push();

interface Personaje {
    nombre: string;
    hp: number;
    habilidades: string[];
    puebloNatal?: string;

}

const personaje: Personaje = {
    nombre: 'strider',
    hp: 100,
    habilidades: ['bash', 'counter', 'healing']
}

personaje.puebloNatal = 'pueblo paleta';

console.table(personaje);

