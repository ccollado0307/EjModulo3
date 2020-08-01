"use strict";
exports.__esModule = true;
var readlineSync = require("readline-sync");
var Monitor = /** @class */ (function () {
    function Monitor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
        this.estaEncendido = false;
    }
    Monitor.prototype.encenderApagar = function () {
        if (this.estaEncendido)
            this.estaEncendido = false;
        else
            this.estaEncendido = true;
    };
    Monitor.prototype.indicarMarca = function (marcaMon) {
        this.marca = marcaMon;
    };
    Monitor.prototype.indicarModelo = function (modeloMon) {
        this.modelo = modeloMon;
    };
    return Monitor;
}());
var miMonitor = new Monitor(readlineSync.question('Ingrese la MARCA del Monitor: '), readlineSync.question('Ingrese el MODELO del Monitor: '));
console.log(miMonitor);
miMonitor.encenderApagar();
miMonitor.indicarMarca(readlineSync.question('Ingrese la MARCA del Monitor: '));
miMonitor.indicarModelo(readlineSync.question('Ingrese el MODELO del Monitor: '));
console.log(miMonitor);
