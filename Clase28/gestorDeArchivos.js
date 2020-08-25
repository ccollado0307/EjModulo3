"use strict";
/* Este Ejercicio Trabaja con Archivos de texto.
El Constructor recibe como parametro la Ubicacion del Archivo.  */
exports.__esModule = true;
exports.GestorDeArchivos = void 0;
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
exports.GestorDeArchivos = GestorDeArchivos;
