"use strict";
exports.__esModule = true;
var fs = require("fs");
var readlineSync = require("readline-sync");
var Auto = /** @class */ (function () {
    function Auto(marca, modelo, color, velocidadMaxima) {
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.velocidadMaxima = velocidadMaxima;
    }
    Auto.prototype.setMarca = function (marcaAuto) {
        this.marca = marcaAuto;
    };
    Auto.prototype.setModelo = function (modeloAuto) {
        this.modelo = modeloAuto;
    };
    Auto.prototype.setColor = function (colorAuto) {
        this.color = colorAuto;
    };
    Auto.prototype.setVelocidadMaxima = function (velocidadMaxima) {
        this.velocidadMaxima = velocidadMaxima;
    };
    Auto.prototype.getMarca = function () {
        return this.marca;
    };
    Auto.prototype.getModelo = function () {
        return this.modelo;
    };
    Auto.prototype.getColor = function () {
        return this.color;
    };
    Auto.prototype.getVelMax = function () {
        return this.velocidadMaxima;
    };
    return Auto;
}());
var agregarAuto = function (marca, modelo, color, velMax, arregloDeAutos) {
    arregloDeAutos[arregloDeAutos.length] = new Auto(marca, modelo, color, velMax);
    return arregloDeAutos;
};
var datosAuto = function () {
    var arrayAuto = new Array;
    var marca = readlineSync.question('Ingrese la marca del Auto: ');
    var modelo = readlineSync.question('Ingrese el modelo del Auto: ');
    var color = readlineSync.question('Ingrese el color del Auto: ');
    var velMax = readlineSync.question('Ingrese la Velocidad Maxima del Auto: ');
    arrayAuto.push(marca);
    arrayAuto.push(modelo);
    arrayAuto.push(color);
    arrayAuto.push(velMax);
    return arrayAuto;
};
var verifAuto = function (elemAuto, arregloAutos) {
    for (var i = 0; i < arregloAutos.length; i++) {
        if ((arregloAutos[i].getMarca() == elemAuto[0]) && arregloAutos[i].getModelo() == (parseInt(elemAuto[1])) && (arregloAutos[i].getColor() == elemAuto[2]) && (arregloAutos[i].getVelMax() == (parseInt(elemAuto[3])))) {
            return i;
        }
    }
    return -1;
};
//------------------------------------------------------------------------------------------------------------
var autos = fs.readFileSync('registroAutomotor/autos.txt', 'utf8');
var listaAutos = autos.split('\r\n');
var arregloAutos = new Array;
var elemAuto;
//Creamos el Arreglo de Autos a partir del archivo de texto. 
for (var i = 0; i < listaAutos.length; i++) {
    elemAuto = listaAutos[i].split(',');
    arregloAutos = agregarAuto(elemAuto[0], parseInt(elemAuto[1]), elemAuto[2], parseInt(elemAuto[3]), arregloAutos);
}
console.log('Autos contiene los siguientes Autos en el Arreglo de Autos: ', arregloAutos);
//Agregamos un Auto al Arreglo de Autos
console.log('Ingrese los datos del AUTO a dar de ALTA: ');
elemAuto = datosAuto();
arregloAutos = agregarAuto(elemAuto[0], parseInt(elemAuto[1]), elemAuto[2], parseInt(elemAuto[3]), arregloAutos);
console.log('Autos contiene los siguientes Autos luego del ALTA: ', arregloAutos);
//Consultar por un auto en el Arreglo de Autos
console.log('Ingrese los datos del AUTO para verificar su existencia: ');
elemAuto = datosAuto();
var posAuto = verifAuto(elemAuto, arregloAutos);
if (posAuto != -1)
    console.log('El AUTO existe');
else
    console.log('El AUTO no existe');
//Borrar un auto en el Arreglo de Autos         
console.log('Dar de BAJA un Auto: ');
elemAuto = datosAuto();
posAuto = verifAuto(elemAuto, arregloAutos);
if (posAuto != -1)
    arregloAutos.splice(posAuto, 1);
else
    console.log('El AUTO indicado NO EXISTE');
console.log('Autos contiene los siguientes Autos luego de la BAJA: ', arregloAutos);
//Actualizar los datos de un Auto en el Arreglo de Autos         
console.log('Ingrese el Auto que desea actualizar : ');
elemAuto = datosAuto();
posAuto = verifAuto(elemAuto, arregloAutos);
if (posAuto != -1) {
    console.log('Ingrese el/los datos del Auto a actualizar : ');
    elemAuto = datosAuto();
    var auto = void 0;
    auto = arregloAutos[posAuto];
    auto.setMarca(elemAuto[0]);
    auto.setModelo(parseInt(elemAuto[1]));
    auto.setColor(elemAuto[2]);
    auto.setVelocidadMaxima(parseInt(elemAuto[3]));
}
else
    console.log('El AUTO indicado NO EXISTE');
console.log('Autos contiene los siguientes Autos luego de ACTUALIZAR: ', arregloAutos);
