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
exports.Rectangulo = void 0;
var figura_1 = require("./figura");
var Rectangulo = /** @class */ (function (_super) {
    __extends(Rectangulo, _super);
    function Rectangulo(base, altura, color) {
        var _this = _super.call(this, color) || this;
        _this.base = base;
        _this.altura = altura;
        return _this;
    }
    Rectangulo.prototype.setBase = function (base) {
        this.base = base;
    };
    Rectangulo.prototype.setAltura = function (altura) {
        this.altura = altura;
    };
    Rectangulo.prototype.calcularPerimetro = function () {
        return ((this.base + this.altura) * 2);
    };
    Rectangulo.prototype.calcularArea = function () {
        return (this.base * this.altura);
    };
    return Rectangulo;
}(figura_1.Figura));
exports.Rectangulo = Rectangulo;
