"use strict";
exports.__esModule = true;
exports.Telefono = void 0;
var Telefono = /** @class */ (function () {
    function Telefono() {
        this.estaPrendido = false;
        this.bateriaActual = 100;
        this.linternaPrendida = false;
    }
    Telefono.prototype.mandarMensaje = function (mensaje, numero) {
        this.estaPrendido = true;
        if (numero == 0)
            throw new Error('No se puede realizar la llamada');
        console.log('Mensaje a Enviar ', mensaje, 'al numero ', numero);
        return true;
    };
    Telefono.prototype.hacerLlamada = function (numTE) {
        this.estaPrendido = true;
        console.log('Llamar al Numero ', numTE);
    };
    Telefono.prototype.prenderApagar = function () {
        if (this.estaPrendido)
            this.estaPrendido = false;
        else
            this.estaPrendido = true;
    };
    return Telefono;
}());
exports.Telefono = Telefono;
