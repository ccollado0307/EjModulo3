"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.AutoCiudadBuilder = void 0;
var autoBuilder_1 = require("./autoBuilder");
var AutoCiudadBuilder = /** @class */ (function (_super) {
    __extends(AutoCiudadBuilder, _super);
    function AutoCiudadBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AutoCiudadBuilder.prototype.constMarca = function () {
        this.auto.setMarca("Toyota");
    };
    AutoCiudadBuilder.prototype.constModelo = function () {
        this.auto.setModelo(2019);
    };
    AutoCiudadBuilder.prototype.constColor = function () {
        this.auto.setColor("Blanco");
    };
    AutoCiudadBuilder.prototype.constVelocidadMaxima = function () {
        this.auto.setVelocidadMaxima(120);
    };
    AutoCiudadBuilder.prototype.constTipoCaja = function () {
        this.auto.setTipoCaja("Manual");
    };
    AutoCiudadBuilder.prototype.constGasolero = function () {
        this.auto.setGasolero(true);
    };
    return AutoCiudadBuilder;
}(autoBuilder_1.AutoBuilder));
exports.AutoCiudadBuilder = AutoCiudadBuilder;
