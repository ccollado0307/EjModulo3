"use strict";
exports.__esModule = true;
var readlineSync = require("readline-sync");
var arreglo = new Array();
var cargarArreglo = function () {
    var palabra = readlineSync.question('Ingrese una palabra. Un punto (.) indica el fin de la lista: ');
    while (palabra != '.') {
        arreglo.push(palabra);
        palabra = readlineSync.question('Ingrese una palabra. Un punto (.) indica el fin de la lista: ');
    }
    ;
};
var insertar = function (palabra) {
    arreglo.push(palabra);
};
var eliminar = function (palabra) {
    if (buscar(palabra)) {
        arreglo.splice(arreglo.indexOf(palabra), 1);
    }
};
var buscar = function (palabra) { return (arreglo.indexOf(palabra) != -1); };
var actualizar = function (palabra1, palabra2) {
    if (buscar(palabra1)) {
        arreglo.splice(arreglo.indexOf(palabra1), 1, palabra2);
    }
};
cargarArreglo();
console.log('Lista de Palabras: ', arreglo);
insertar(readlineSync.question('Ingrese la Palabra a Insertar en la Lista de Palabras: '));
console.log('Lista de Palabras luego de Insertar: ', arreglo);
eliminar(readlineSync.question('Ingrese la Palabra a Eliminar de la Lista de Palabras: '));
console.log('Lista de Palabras luego de Eliminar: ', arreglo);
console.log('La palabra se encuentra en la Lista de Palabras?: ', buscar(readlineSync.question('Ingrese la Palabra a Buscar de la Lista de Palabras: ')));
actualizar(readlineSync.question('Ingrese la Palabra a Actualizar en la Lista de Palabras: '), readlineSync.question('Ingrese la Palabra por la cual la quiere Actualizar: '));
console.log('Lista de Palabras despues de Actualizar: ', arreglo);
