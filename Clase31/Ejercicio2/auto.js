"use strict";
exports.__esModule = true;
exports.Auto = void 0;
var Auto = /** @class */ (function () {
    function Auto() {
        this.marca = '';
        this.modelo = 0;
        this.color = '';
        this.velocidadMaxima = 0;
        this.tipoCaja = '';
        this.gasolero = false;
    }
    Auto.prototype.setMarca = function (marcaAuto) {
        this.marca = marcaAuto;
    };
    Auto.prototype.setModelo = function (modeloAuto) {
        this.modelo = modeloAuto;
    };
    Auto.prototype.setColor = function (colorAuto) {
        this.color = colorAuto;
    };
    Auto.prototype.setVelocidadMaxima = function (velocidadMaxima) {
        this.velocidadMaxima = velocidadMaxima;
    };
    Auto.prototype.setTipoCaja = function (tipoCaja) {
        this.tipoCaja = tipoCaja;
    };
    Auto.prototype.setGasolero = function (gasolero) {
        this.gasolero = gasolero;
    };
    return Auto;
}());
exports.Auto = Auto;
