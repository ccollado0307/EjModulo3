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
exports.Alumno = void 0;
var persona_1 = require("./persona");
var examen_1 = require("./examen");
var Alumno = /** @class */ (function (_super) {
    __extends(Alumno, _super);
    function Alumno(apellido, nombre, DNI, anioCurso) {
        var _this = _super.call(this, apellido, nombre, DNI) || this;
        _this.anioCurso = anioCurso;
        _this.listaExamenes = [];
        return _this;
    }
    Alumno.prototype.getPromedio = function () {
        var promedio = 0;
        for (var i = 0; i < this.listaExamenes.length; i++) {
            promedio += this.listaExamenes[i].getNota();
        }
        return promedio / this.listaExamenes.length;
    };
    Alumno.prototype.cargarExamen = function (materia, nota) {
        var examen = new examen_1.Examen(materia, nota);
        this.listaExamenes.push(examen);
    };
    return Alumno;
}(persona_1.Persona));
exports.Alumno = Alumno;
