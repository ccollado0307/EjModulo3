"use strict";
exports.__esModule = true;
exports.Carrera = void 0;
var Carrera = /** @class */ (function () {
    function Carrera(titulo, finalizado) {
        this.titulo = titulo;
        this.finalizado = finalizado;
    }
    Carrera.prototype.setTitulo = function (titulo) {
        this.titulo = titulo;
    };
    Carrera.prototype.getTitulo = function () {
        return this.titulo;
    };
    Carrera.prototype.setFinalizado = function (finalizado) {
        this.finalizado = finalizado;
    };
    Carrera.prototype.getFinalizado = function () {
        return this.finalizado;
    };
    return Carrera;
}());
exports.Carrera = Carrera;
