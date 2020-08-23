"use strict";
exports.__esModule = true;
exports.Items = void 0;
var Items = /** @class */ (function () {
    function Items(descripcion, costoUn) {
        this.descripcion = descripcion;
        this.costoUn = costoUn;
    }
    Items.prototype.getDescripcion = function () {
        return this.descripcion;
    };
    Items.prototype.getCostoUn = function () {
        return this.costoUn;
    };
    return Items;
}());
exports.Items = Items;
