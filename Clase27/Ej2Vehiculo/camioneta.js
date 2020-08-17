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
exports.Camioneta = void 0;
var vehiculo_1 = require("./vehiculo");
var Camioneta = /** @class */ (function (_super) {
    __extends(Camioneta, _super);
    function Camioneta(marca, conCaja) {
        var _this = _super.call(this, marca) || this;
        _this.conCaja = conCaja;
        return _this;
    }
    Camioneta.prototype.acelerar = function () {
        this.velocidadActual += 10;
    };
    Camioneta.prototype.setColor = function () {
        this.color = 'blanco';
    };
    Camioneta.prototype.setCaja = function () {
        this.conCaja = !this.conCaja;
    };
    Camioneta.prototype.getCaja = function () {
        return this.conCaja;
    };
    return Camioneta;
}(vehiculo_1.Vehiculo));
exports.Camioneta = Camioneta;
