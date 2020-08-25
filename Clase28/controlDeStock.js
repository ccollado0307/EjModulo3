"use strict";
exports.__esModule = true;
exports.ControlDeStock = void 0;
var items_1 = require("./items");
var gestorDeArchivos_1 = require("./gestorDeArchivos");
var fs = require("fs");
var ControlDeStock = /** @class */ (function () {
    function ControlDeStock() {
        this.itemsEnStock = [];
        this.itemsVend = [];
        this.cargarItems();
    }
    ControlDeStock.prototype.cargarItems = function () {
        var ubicacion = 'itemsEnStock.txt';
        var miArchivo = new gestorDeArchivos_1.GestorDeArchivos(ubicacion);
        var arreglo = miArchivo.retornarArreglo();
        for (var i = 0; i < arreglo.length; i++) {
            var items = arreglo[i].split(',');
            var itemsNuevo = new items_1.Items(items[0], Number(items[1]));
            this.itemsEnStock.push(itemsNuevo);
        }
    };
    ControlDeStock.prototype.getItemsEnStock = function () {
        return this.itemsEnStock;
    };
    ControlDeStock.prototype.getItemsVendidos = function () {
        return this.itemsVend;
    };
    ControlDeStock.prototype.buscarItems = function (descripcion) {
        for (var i = 0; i < this.itemsEnStock.length; i++) {
            var item = this.itemsEnStock[i];
            if (item.getDescripcion() == descripcion) {
                return i;
            }
        }
        return -1;
    };
    ControlDeStock.prototype.vender = function (item) {
        var ubicacion = this.buscarItems(item);
        if (ubicacion != -1) {
            var item_1 = this.itemsEnStock[ubicacion];
            this.itemsEnStock.splice(ubicacion, 1);
            this.itemsVend.push(item_1);
        }
    };
    ControlDeStock.prototype.comprar = function (descripcion, costoUn) {
        this.itemsEnStock.push(new items_1.Items(descripcion, costoUn));
    };
    ControlDeStock.prototype.ImprimirArchivo = function () {
        var texto = '';
        for (var index = 0; index < this.itemsVend.length; index++) {
            var vehiculo = this.itemsVend[index];
            var cadena = new Array();
            cadena = Object.values(vehiculo);
            texto = texto + cadena.toString() + '\r\n';
        }
        fs.writeFile('itemsVendidos.txt', texto, function (err) {
            // If an error occurred, show it and return
            if (err)
                return console.error(err);
            // Successfully wrote to the file!
        });
    };
    return ControlDeStock;
}());
exports.ControlDeStock = ControlDeStock;
