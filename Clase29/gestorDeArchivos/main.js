"use strict";
exports.__esModule = true;
var gestorDeArchivos_1 = require("./gestorDeArchivos");
var ubicacion = 'gestorDeArchivos/archivo.txt';
var miArchivo = new gestorDeArchivos_1.GestorDeArchivos(ubicacion);
var arreglo = miArchivo.retornarArreglo();
var vacio = false;
try {
    vacio = miArchivo.mostrarArreglo(arreglo);
}
catch (error) {
    console.log('No se puede mostrar el archivo ');
}
console.log('Mi Arreglo ', arreglo);
