"use strict";
exports.__esModule = true;
var rectangulo_1 = require("./rectangulo");
var circulo_1 = require("./circulo");
var readlineSync = require("readline-sync");
//let figura: Figura = new Figura(readlineSync.question('Ingrese el color del Rectangulo: '));
var rectangulo = new rectangulo_1.Rectangulo(2, 4, readlineSync.question('Ingrese el color del Rectangulo: '));
rectangulo.indicarCantLados();
console.log('El color del Rectangulo es: ', rectangulo.getColor());
console.log('El RECTANGULO es ', rectangulo);
var circulo = new circulo_1.Circulo(readlineSync.question('Ingrese el color del Circulo: '));
circulo.indicarCantLados();
console.log('El Circulo es ', circulo);
