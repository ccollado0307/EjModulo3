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
exports.AutoCarreraBuilder = void 0;
var autoBuilder_1 = require("./autoBuilder");
var AutoCarreraBuilder = /** @class */ (function (_super) {
    __extends(AutoCarreraBuilder, _super);
    function AutoCarreraBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AutoCarreraBuilder.prototype.constMarca = function () {
        this.auto.setMarca("Ford");
    };
    AutoCarreraBuilder.prototype.constModelo = function () {
        this.auto.setModelo(2020);
    };
    AutoCarreraBuilder.prototype.constColor = function () {
        this.auto.setColor("Azul");
    };
    AutoCarreraBuilder.prototype.constVelocidadMaxima = function () {
        this.auto.setVelocidadMaxima(280);
    };
    AutoCarreraBuilder.prototype.constTipoCaja = function () {
        this.auto.setTipoCaja("Manual");
    };
    AutoCarreraBuilder.prototype.constGasolero = function () {
        this.auto.setGasolero(false);
    };
    return AutoCarreraBuilder;
}(autoBuilder_1.AutoBuilder));
exports.AutoCarreraBuilder = AutoCarreraBuilder;
