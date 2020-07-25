import * as fs from 'fs';

let texto: string = fs.readFileSync('archivo.txt', 'utf8');

let palabras: string[] = texto.split(' ');

console.log('El archivo de texto contiene las siguientes palabras: ', palabras);