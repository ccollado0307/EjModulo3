"use strict";
/* Este Ejercicio Trabaja con Archivos de texto.
El Constructor recibe como parametro la Ubicacion del Archivo.  */
exports.__esModule = true;
var fs = require("fs");
var GestorDeArchivos = /** @class */ (function () {
    function GestorDeArchivos(ubicacion) {
        var nombres = fs.readFileSync(ubicacion, 'utf8');
        this.arreglo = new Array();
        this.arreglo = nombres.split('\r\n');
    }
    GestorDeArchivos.prototype.mostrarArreglo = function (arreglo) {
        console.log('El archivo de texto contiene: ', arreglo);
    };
    GestorDeArchivos.prototype.retornarArreglo = function () {
        return this.arreglo;
    };
    return GestorDeArchivos;
}());
var ubicacion = 'gestorDeArchivos/archivo.txt';
var miArchivo = new GestorDeArchivos(ubicacion);
var arreglo = miArchivo.retornarArreglo();
miArchivo.mostrarArreglo(arreglo);
console.log('Mi Arreglo ', arreglo);
