"use strict";
exports.__esModule = true;
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(apellido, nombre, DNI) {
        this.apellido = apellido;
        this.nombre = nombre;
        this.DNI = DNI;
    }
    Persona.prototype.getDNI = function () {
        return this.DNI;
    };
    return Persona;
}());
exports.Persona = Persona;
