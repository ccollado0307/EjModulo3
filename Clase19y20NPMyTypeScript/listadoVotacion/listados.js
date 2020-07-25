"use strict";
exports.__esModule = true;
var fs = require("fs");
var nombres = fs.readFileSync('nombres.txt', 'utf8');
var arregloDeNombres = nombres.split(',');
console.log('El archivo de texto contiene los siguientes Nombres: ', arregloDeNombres);
console.log('-----------------------------------------------------------------------');
var escuelas = fs.readFileSync('escuelas.txt', 'utf8');
var arregloDeEscuelas = escuelas.split(',');
console.log('El archivo de texto contiene las siguientes Escuelas: ', arregloDeEscuelas);
console.log('-----------------------------------------------------------------------');
var retornaEscuela = function (nombre) {
    var letra = nombre.charAt(0);
    switch (letra) {
        case "A":
        case "B":
        case "C":
        case "D":
        case "E":
            return arregloDeEscuelas[0];
            break;
        case "F":
        case "G":
        case "H":
        case "I":
        case "J":
            return arregloDeEscuelas[1];
            break;
        case "H":
        case "I":
        case "J":
        case "K":
        case "L":
            return arregloDeEscuelas[2];
            break;
        case "LL":
        case "M":
        case "N":
        case "O":
        case "P":
            return arregloDeEscuelas[3];
            break;
        case "Q":
        case "R":
        case "S":
        case "T":
        case "U":
            return arregloDeEscuelas[4];
            break;
        default:
            return arregloDeEscuelas[5];
            ;
    }
    ;
};
for (var i = 0; i < arregloDeNombres.length; i++) {
    console.log('El ciudadando ', arregloDeNombres[i], ' vota en ', retornaEscuela(arregloDeNombres[i]));
    console.log('-------------------------------------------------------------');
}
