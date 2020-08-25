"use strict";
exports.__esModule = true;
exports.AutoCarrera = void 0;
var AutoCarrera = /** @class */ (function () {
    function AutoCarrera() {
        this.color = '';
        this.velocidadActual = 0;
    }
    AutoCarrera.prototype.acelerar = function () {
        this.velocidadActual += 50;
    };
    AutoCarrera.prototype.getVelocidadMaxima = function () {
        return this.velocidadActual;
    };
    AutoCarrera.prototype.setColor = function (color) {
        this.color = color;
    };
    AutoCarrera.prototype.getColor = function () {
        return this.color;
    };
    return AutoCarrera;
}());
exports.AutoCarrera = AutoCarrera;
