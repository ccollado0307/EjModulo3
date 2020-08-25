"use strict";
exports.__esModule = true;
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(dni, apYNomb) {
        this.dni = dni;
        this.apYNomb = apYNomb;
        this.grado = '';
    }
    Persona.prototype.setGrado = function (grado) {
        this.grado = 'SV';
    };
    Persona.prototype.secDNI = function (dni) {
        this.dni = dni;
    };
    Persona.prototype.getDNI = function () {
        return this.dni;
    };
    Persona.prototype.secApYNomb = function (apYNomb) {
        this.apYNomb = apYNomb;
    };
    Persona.prototype.getApYNomb = function () {
        return this.apYNomb;
    };
    return Persona;
}());
exports.Persona = Persona;
