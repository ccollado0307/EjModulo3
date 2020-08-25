"use strict";
exports.__esModule = true;
exports.Camara = void 0;
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
exports.Camara = Camara;
