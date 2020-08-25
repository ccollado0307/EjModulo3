"use strict";
exports.__esModule = true;
var persona_1 = require("./persona");
var carrera_1 = require("./carrera");
var oficial_1 = require("./oficial");
var suboficial_1 = require("./suboficial");
var persona = new persona_1.Persona('22.345.678', 'Juan Perez');
console.log('Es una PERSONA ', persona);
var carrera = new carrera_1.Carrera('Analista', true);
var oficial = new oficial_1.Oficial('21.345.678', 'Lucas Rosas', carrera, true);
oficial.setGrado();
console.log('Es un OFICIAL ', oficial);
var sufoficial = new suboficial_1.Suboficial('21.345.678', 'Lucas Rosas', true);
sufoficial.setGrado();
console.log('Es un SUBOFICIAL ', sufoficial);
