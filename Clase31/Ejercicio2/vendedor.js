"use strict";
exports.__esModule = true;
exports.Vendedor = void 0;
var Vendedor = /** @class */ (function () {
    function Vendedor() {
    }
    Vendedor.prototype.setAutoBuilder = function (autoBuilder) {
        this.autoBuilder = autoBuilder;
    };
    Vendedor.prototype.getAuto = function () {
        return this.autoBuilder.getAuto();
    };
    Vendedor.prototype.constAuto = function () {
        this.autoBuilder.createNewAutoProduct();
        this.autoBuilder.constMarca();
        this.autoBuilder.constModelo();
        this.autoBuilder.constColor();
        this.autoBuilder.constVelocidadMaxima();
        this.autoBuilder.constTipoCaja();
        this.autoBuilder.constGasolero();
    };
    return Vendedor;
}());
exports.Vendedor = Vendedor;
