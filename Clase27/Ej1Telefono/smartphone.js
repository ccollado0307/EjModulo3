"use strict";
exports.__esModule = true;
exports.Smartphone = void 0;
var Smartphone = /** @class */ (function () {
    function Smartphone() {
        this.estaPrendido = false;
    }
    Smartphone.prototype.prender = function () {
        this.estaPrendido = !this.estaPrendido;
    };
    Smartphone.prototype.apagar = function () {
        this.estaPrendido = !this.estaPrendido;
    };
    Smartphone.prototype.llamar = function (numero) {
        if (this.estaPrendido)
            console.log('Llamar al Numero ', numero);
        else
            console.log('El Telefono esta apagado, no se puede llamar al numero ', numero);
    };
    Smartphone.prototype.sacarFoto = function () {
        if (this.estaPrendido)
            console.log('Saco una Foto');
        else
            console.log('El Telefono esta apagado, no se puede sacar una foto');
    };
    return Smartphone;
}());
exports.Smartphone = Smartphone;
