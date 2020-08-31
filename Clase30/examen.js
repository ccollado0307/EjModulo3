"use strict";
exports.__esModule = true;
exports.Examen = void 0;
var Examen = /** @class */ (function () {
    function Examen(nombreMateria, nota) {
        this.nombreMateria = nombreMateria;
        this.nota = nota;
    }
    Examen.prototype.getNota = function () {
        return this.nota;
    };
    return Examen;
}());
exports.Examen = Examen;
