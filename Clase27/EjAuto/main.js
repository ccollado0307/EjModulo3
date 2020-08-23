"use strict";
exports.__esModule = true;
var autoCarrera_1 = require("./autoCarrera");
var auto = new autoCarrera_1.AutoCarrera();
console.log('Auto sin acelerar ', auto);
auto.setColor('blanco');
auto.acelerar();
console.log('Auto despues de acelerar ', auto);
