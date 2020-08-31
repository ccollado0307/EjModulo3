"use strict";
exports.__esModule = true;
exports.Legajos = void 0;
var alumno_1 = require("./alumno");
var gestorDeArchivos_1 = require("./gestorDeArchivos");
var Legajos = /** @class */ (function () {
    function Legajos() {
        this.listaLegajos = [];
    }
    Legajos.prototype.agregarAlumno = function (alumno) {
        this.listaLegajos.push(alumno);
    };
    Legajos.prototype.promAlumno = function (DNI) {
        var alumno = this.listaLegajos[this.buscarAlumno(DNI)];
        var promedio = alumno.getPromedio();
        return promedio;
    };
    Legajos.prototype.buscarAlumno = function (DNI) {
        for (var i = 0; i < this.listaLegajos.length; i++) {
            if (this.listaLegajos[i].getDNI() == DNI)
                return i;
        }
        return -1;
    };
    Legajos.prototype.promGeneral = function () {
        var promedio = 0;
        for (var i = 0; i < this.listaLegajos.length; i++) {
            promedio += this.listaLegajos[i].getPromedio();
        }
        return promedio / this.listaLegajos.length;
    };
    Legajos.prototype.cargarAlumnos = function () {
        var ubicacion = 'alumnos.txt';
        var miArchivo = new gestorDeArchivos_1.GestorDeArchivos(ubicacion);
        var arreglo = miArchivo.retornarArreglo();
        for (var i = 0; i < arreglo.length; i++) {
            var cadenaAlumno = arreglo[i].split(' ');
            var alumno = new alumno_1.Alumno(cadenaAlumno[0], cadenaAlumno[1], parseInt(cadenaAlumno[2]), parseInt(cadenaAlumno[3]));
            for (var j = 4; j < cadenaAlumno.length - 1; j++) {
                var materia = cadenaAlumno[j];
                var nota = parseInt(cadenaAlumno[j + 1]);
                alumno.cargarExamen(materia, nota);
                j++;
            }
            this.listaLegajos.push(alumno);
        }
    };
    return Legajos;
}());
exports.Legajos = Legajos;
