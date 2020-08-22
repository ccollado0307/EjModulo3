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
exports.Circulo = void 0;
var figura_1 = require("./figura");
var Circulo = /** @class */ (function (_super) {
    __extends(Circulo, _super);
    function Circulo(color) {
        var _this = _super.call(this, color) || this;
        _this.radio = 2.0;
        return _this;
    }
    Circulo.prototype.setRadio = function (radio) {
        this.radio = radio;
    };
    Circulo.prototype.getRadio = function () {
        return this.radio;
    };
    Circulo.prototype.indicarCantLados = function () {
        this.cantLados = 1;
    };
    return Circulo;
}(figura_1.Figura));
exports.Circulo = Circulo;
