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
exports.AutoCarrera = void 0;
var auto_1 = require("./auto");
var AutoCarrera = /** @class */ (function (_super) {
    __extends(AutoCarrera, _super);
    function AutoCarrera() {
        var _this = _super.call(this) || this;
        _this.auspiciante = 'Flia Perez';
        return _this;
    }
    AutoCarrera.prototype.setMarca = function (marca) {
        this.marca = marca;
    };
    AutoCarrera.prototype.setAuspiciante = function (auspiciante) {
        this.auspiciante = auspiciante;
    };
    AutoCarrera.prototype.getAuspiciante = function () {
        return this.auspiciante;
    };
    AutoCarrera.prototype.acelerar = function () {
        this.velocidadActual += 50;
    };
    return AutoCarrera;
}(auto_1.Auto));
exports.AutoCarrera = AutoCarrera;
