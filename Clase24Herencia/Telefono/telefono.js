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
var Telefono = /** @class */ (function () {
    function Telefono() {
        this.estaPrendido = false;
        this.bateriaActual = 100;
    }
    Telefono.prototype.mandarMensaje = function (mensaje) {
        this.estaPrendido = true;
        console.log('Mensaje a Enviar ', mensaje);
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
var TelefonoConCamara = /** @class */ (function (_super) {
    __extends(TelefonoConCamara, _super);
    function TelefonoConCamara() {
        return _super.call(this) || this;
    }
    TelefonoConCamara.prototype.sacarFoto = function () {
        console.log('Saque una linda foto');
    };
    return TelefonoConCamara;
}(Telefono));
var TelefonoConRadio = /** @class */ (function (_super) {
    __extends(TelefonoConRadio, _super);
    function TelefonoConRadio() {
        var _this = _super.call(this) || this;
        _this.frecuenciaActual = 103.9;
        return _this;
    }
    TelefonoConRadio.prototype.verFrecuenciaActual = function () {
        console.log('La Frecuencia Actual es ', this.frecuenciaActual);
    };
    return TelefonoConRadio;
}(Telefono));
var telefono = new Telefono;
telefono.mandarMensaje('Hola soy un telefono');
var telefonoConCamara = new TelefonoConCamara;
telefonoConCamara.prenderApagar();
console.log('Telefono con Camara ', telefonoConCamara);
var telefonoConFrec = new TelefonoConRadio;
telefonoConFrec.verFrecuenciaActual();
telefonoConFrec.hacerLlamada(154604600);
