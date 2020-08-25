"use strict";
exports.__esModule = true;
exports.Vehiculo = void 0;
var Vehiculo = /** @class */ (function () {
    function Vehiculo(marca) {
        this.marca = marca;
        this.velocidadActual = 0;
        this.color = '';
        this.estaPrendido = false;
    }
    Vehiculo.prototype.prender = function () {
        this.estaPrendido = true;
    };
    Vehiculo.prototype.apagar = function () {
        this.estaPrendido = false;
    };
    Vehiculo.prototype.setMarca = function (marca) {
        this.marca = marca;
    };
    Vehiculo.prototype.getMarca = function () {
        return this.marca;
    };
    return Vehiculo;
}());
exports.Vehiculo = Vehiculo;
