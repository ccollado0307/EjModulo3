"use strict";
exports.__esModule = true;
var fs = require("fs");
var texto = fs.readFileSync('archivo.txt', 'utf8');
var palabras = texto.split(' ');
console.log('El archivo de texto contiene las siguientes palabras: ', palabras);
