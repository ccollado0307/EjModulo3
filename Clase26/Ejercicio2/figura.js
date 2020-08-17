"use strict";
exports.__esModule = true;
exports.Figura = void 0;
var Figura = /** @class */ (function () {
    function Figura(color) {
        this.color = color;
    }
    Figura.prototype.calcularPerimetro = function () {
        return 0;
    };
    Figura.prototype.calcularArea = function () {
        return 0;
    };
    Figura.prototype.secColor = function (color) {
        this.color = color;
    };
    Figura.prototype.getColor = function () {
        return this.color;
    };
    return Figura;
}());
exports.Figura = Figura;
