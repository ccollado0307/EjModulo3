"use strict";
exports.__esModule = true;
exports.Auto = void 0;
var Auto = /** @class */ (function () {
    function Auto() {
        this.marca = 'Ford';
        this.modelo = 2016;
        this.velocidadActual = 0;
    }
    Auto.prototype.setMarca = function (marcaAuto) {
        this.marca = marcaAuto;
    };
    Auto.prototype.setModelo = function (modeloAuto) {
        this.modelo = modeloAuto;
    };
    Auto.prototype.getMarca = function () {
        return this.marca;
    };
    Auto.prototype.getModelo = function () {
        return this.modelo;
    };
    Auto.prototype.acelerar = function () {
        this.velocidadActual += 10;
    };
    return Auto;
}());
exports.Auto = Auto;
