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
exports.Suboficial = void 0;
var persona_1 = require("./persona");
var Suboficial = /** @class */ (function (_super) {
    __extends(Suboficial, _super);
    function Suboficial(dni, apYNombre, subSubalt) {
        var _this = _super.call(this, dni, apYNombre) || this;
        _this.supSubalt = subSubalt;
        return _this;
    }
    Suboficial.prototype.setSupSubalt = function (supSubalt) {
        this.supSubalt = supSubalt;
    };
    Suboficial.prototype.getSupSubalt = function () {
        return this.supSubalt;
    };
    Suboficial.prototype.setGrado = function () {
        this.grado = 'SV';
    };
    return Suboficial;
}(persona_1.Persona));
exports.Suboficial = Suboficial;
