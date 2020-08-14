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
        this.linternaPrendida = false;
    }
    Telefono.prototype.mandarMensaje = function (mensaje, numero) {
        this.estaPrendido = true;
        console.log('Mensaje a Enviar ', mensaje, 'al numero ', numero);
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
var Camara = /** @class */ (function () {
    function Camara() {
        this.pixels = '20px';
    }
    ;
    Camara.prototype.sacarFoto = function () {
        console.log('Saco una FOTO');
    };
    Camara.prototype.getPixels = function () {
        return this.pixels;
    };
    Camara.prototype.modifPixeles = function (pixels) {
        this.pixels = pixels;
    };
    return Camara;
}());
var TelefonoConCamara = /** @class */ (function (_super) {
    __extends(TelefonoConCamara, _super);
    function TelefonoConCamara() {
        var _this = _super.call(this) || this;
        _this.camara = new Camara;
        return _this;
    }
    TelefonoConCamara.prototype.sacarFoto = function () {
        this.camara.sacarFoto();
    };
    return TelefonoConCamara;
}(Telefono));
var telefono = new Telefono;
telefono.prenderApagar();
telefono.mandarMensaje('Hola soy un telefono', 154604600);
telefono.hacerLlamada(2494123123);
var telefonoConCamara = new TelefonoConCamara;
telefonoConCamara.prenderApagar();
telefonoConCamara.sacarFoto();
telefonoConCamara.mandarMensaje('Soy un TE', 2494567567);
console.log('Telefono con Camara ', telefonoConCamara);
var camara = new Camara;
camara.sacarFoto();
camara.modifPixeles('30px');
console.log(camara.getPixels());
console.log(telefonoConCamara);
