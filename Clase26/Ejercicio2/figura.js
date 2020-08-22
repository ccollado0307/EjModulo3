"use strict";
exports.__esModule = true;
exports.Figura = void 0;
var Figura = /** @class */ (function () {
    function Figura(color) {
        this.cantLados = 0;
        this.color = color;
    }
    Figura.prototype.setColor = function (color) {
        this.color = color;
    };
    Figura.prototype.getColor = function () {
        return this.color;
    };
    Figura.prototype.indicarCantLados = function () {
        this.cantLados = 1;
    };
    Figura.prototype.getCantLados = function () {
        return this.cantLados;
    };
    return Figura;
}());
exports.Figura = Figura;
