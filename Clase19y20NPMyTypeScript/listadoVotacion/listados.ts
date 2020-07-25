import * as fs from 'fs';

let nombres: string = fs.readFileSync('nombres.txt', 'utf8');
let arregloDeNombres: string[] = nombres.split(',');
console.log('El archivo de texto contiene los siguientes Nombres: ', arregloDeNombres);
console.log('-----------------------------------------------------------------------');

let escuelas: string = fs.readFileSync('escuelas.txt', 'utf8');
let arregloDeEscuelas: string[] = escuelas.split(',');
console.log('El archivo de texto contiene las siguientes Escuelas: ', arregloDeEscuelas);
console.log('-----------------------------------------------------------------------');

let retornaEscuela = (nombre:string) => {
    let letra: string = nombre.charAt(0); 
        switch(letra) {
            case "A": case "B": case "C": case "D": case "E": 
                return arregloDeEscuelas[0];
                break;
            case "F": case "G": case "H": case "I": case "J":
                return arregloDeEscuelas[1];
                break;
            case "H": case "I": case "J": case "K": case "L":
                return arregloDeEscuelas[2];
                break;
            case "LL": case "M": case "N": case "O": case "P":
                return arregloDeEscuelas[3];
                break;
            case "Q": case "R": case "S": case "T": case "U":
                return arregloDeEscuelas[4];
                break;
            default: 
                return arregloDeEscuelas[5];;
        };
}

for (let i: number = 0; i < arregloDeNombres.length; i++) {
    console.log('El ciudadando ', arregloDeNombres[i], ' vota en ', retornaEscuela(arregloDeNombres[i]));
    console.log('-------------------------------------------------------------');
}