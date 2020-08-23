"use strict";
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
        if (this.arreglo.length == 1) //El archivo esta vacio
            throw new Error('No hay nada para mostrar ');
        console.log('El archivo de texto contiene: ', arreglo);
        return true;
    };
    GestorDeArchivos.prototype.retornarArreglo = function () {
        return this.arreglo;
    };
    return GestorDeArchivos;
}());
exports.GestorDeArchivos = GestorDeArchivos;
