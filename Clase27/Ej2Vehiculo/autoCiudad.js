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
exports.AutoCiudad = void 0;
var vehiculo_1 = require("./vehiculo");
var AutoCiudad = /** @class */ (function (_super) {
    __extends(AutoCiudad, _super);
    function AutoCiudad(marca, tipoCaja) {
        var _this = _super.call(this, marca) || this;
        _this.tipoCaja = tipoCaja;
        return _this;
    }
    AutoCiudad.prototype.acelerar = function () {
        this.velocidadActual += 15;
    };
    AutoCiudad.prototype.setColor = function () {
        this.color = 'azul';
    };
    AutoCiudad.prototype.setTipoCaja = function (tipoCaja) {
        this.tipoCaja = tipoCaja;
    };
    AutoCiudad.prototype.getTipoCaja = function () {
        return this.tipoCaja;
    };
    return AutoCiudad;
}(vehiculo_1.Vehiculo));
exports.AutoCiudad = AutoCiudad;
