"use strict";
exports.__esModule = true;
var telefonoConCamara_1 = require("./telefonoConCamara");
var readlineSync = require("readline-sync");
var telefonoConCamara = new telefonoConCamara_1.TelefonoConCamara;
telefonoConCamara.prenderApagar();
telefonoConCamara.sacarFoto();
var numero = readlineSync.question('Ingrese el numero al cual desea hablar ');
var llamada = true;
try {
    llamada = telefonoConCamara.mandarMensaje('Llamar al numero ', numero);
}
catch (error) {
    console.log('No se puede realizar la llamada');
    llamada = false;
}
console.log("\n");
console.log('Telefono con Camara ', telefonoConCamara);
