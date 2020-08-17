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
exports.Oficial = void 0;
var persona_1 = require("./persona");
var Oficial = /** @class */ (function (_super) {
    __extends(Oficial, _super);
    function Oficial(dni, apYNombre, carrera, actividad) {
        var _this = _super.call(this, dni, apYNombre) || this;
        _this.carrera = carrera;
        _this.actividad = actividad;
        return _this;
    }
    Oficial.prototype.setCarrera = function (carrera) {
        this.carrera = carrera;
    };
    Oficial.prototype.getCarrera = function () {
        return this.carrera;
    };
    Oficial.prototype.setGrado = function () {
        this.grado = 'CT';
    };
    return Oficial;
}(persona_1.Persona));
exports.Oficial = Oficial;
