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
var readlineSync = require("readline-sync");
var Vajilla = /** @class */ (function () {
    function Vajilla(marca, color) {
        this.marca = marca;
        this.color = color;
        this.material = 'material';
    }
    Vajilla.prototype.setMarca = function (marca) {
        this.marca = marca;
    };
    Vajilla.prototype.getMarca = function () {
        return this.marca;
    };
    Vajilla.prototype.setColor = function (color) {
        this.color = color;
    };
    Vajilla.prototype.getColor = function () {
        return this.color;
    };
    Vajilla.prototype.setMaterial = function () {
        this.material = '';
    };
    return Vajilla;
}());
var Plato = /** @class */ (function (_super) {
    __extends(Plato, _super);
    function Plato(marca, color, material, diametro, disenio) {
        var _this = _super.call(this, marca, color) || this;
        _this.diametro = diametro;
        _this.disenio = disenio;
        return _this;
    }
    ;
    Plato.prototype.setDiametro = function (diametro) {
        this.diametro = diametro;
    };
    Plato.prototype.getDiametro = function () {
        return this.diametro;
    };
    Plato.prototype.setDisenio = function (disenio) {
        this.disenio = disenio;
    };
    Plato.prototype.getDisenio = function () {
        return this.disenio;
    };
    Plato.prototype.setMaterial = function () {
        this.material = 'melamina';
    };
    return Plato;
}(Vajilla));
var Manija = /** @class */ (function () {
    function Manija(tipo) {
        this.tipo = tipo;
    }
    Manija.prototype.getTipo = function () {
        return this.tipo;
    };
    return Manija;
}());
var Fuente = /** @class */ (function (_super) {
    __extends(Fuente, _super);
    function Fuente(marca, color, material, forma, manija) {
        var _this = _super.call(this, marca, color) || this;
        _this.forma = forma;
        _this.manija = manija;
        return _this;
    }
    Fuente.prototype.getMaterialBase = function () {
        return this.matBase;
    };
    Fuente.prototype.setMaterial = function () {
        this.material = 'loza';
    };
    return Fuente;
}(Vajilla));
var vajilla = new Vajilla(readlineSync.question('Ingrese la marca '), readlineSync.question('Ingrese el color '));
console.log('Esta es la VAJILLA ', vajilla);
console.log('------------------------------------------------------------');
var plato = new Plato(readlineSync.question('Ingrese la marca '), readlineSync.question('Ingrese el color '), readlineSync.question('Ingrese la material '), readlineSync.question('Ingrese el diametro '), readlineSync.question('Ingrese el diseño'));
plato.setMaterial();
console.log('El COLOR del PLATO es', plato.getColor());
console.log('Este es el PLATO  ', plato);
console.log('------------------------------------------------------------');
var manija = new Manija(readlineSync.question('Ingrese el manija '));
var fuente = new Fuente(readlineSync.question('Ingrese la marca '), readlineSync.question('Ingrese el color '), readlineSync.question('Ingrese la material '), readlineSync.question('Ingrese el forma '), manija);
fuente.setMaterial();
fuente.setMarca(readlineSync.question('Ingrese la marca que desea modificar'));
var matBase = fuente.getMaterialBase();
console.log('El MATERIAL BASE de la FUENTE es ', matBase);
console.log('La FUENTE es ', fuente);
