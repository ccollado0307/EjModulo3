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
var fs = require("fs");
var readlineSync = require("readline-sync");
var Vehiculo = /** @class */ (function () {
    function Vehiculo(marca, modelo, color, velocidadMaxima) {
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.velocidadMaxima = velocidadMaxima;
    }
    Vehiculo.prototype.setMarca = function (marcaAuto) {
        this.marca = marcaAuto;
    };
    Vehiculo.prototype.setModelo = function (modeloAuto) {
        this.modelo = modeloAuto;
    };
    Vehiculo.prototype.setColor = function (colorAuto) {
        this.color = colorAuto;
    };
    Vehiculo.prototype.setVelocidadMaxima = function (velocidadMaxima) {
        this.velocidadMaxima = velocidadMaxima;
    };
    Vehiculo.prototype.getMarca = function () {
        return this.marca;
    };
    Vehiculo.prototype.getModelo = function () {
        return this.modelo;
    };
    Vehiculo.prototype.getColor = function () {
        return this.color;
    };
    Vehiculo.prototype.getVelMax = function () {
        return this.velocidadMaxima;
    };
    return Vehiculo;
}());
var Moto = /** @class */ (function (_super) {
    __extends(Moto, _super);
    function Moto(marca, modelo, color, velocidadMaxima, cilindrada) {
        var _this = _super.call(this, marca, modelo, color, velocidadMaxima) || this;
        _this.cilindrada = cilindrada;
        return _this;
    }
    Moto.prototype.getCilindrada = function () {
        return this.cilindrada;
    };
    return Moto;
}(Vehiculo));
var Camion = /** @class */ (function (_super) {
    __extends(Camion, _super);
    function Camion(marca, modelo, color, velocidadMaxima, tara, longitud) {
        var _this = _super.call(this, marca, modelo, color, velocidadMaxima) || this;
        _this.tara = tara;
        _this.longitud = longitud;
        return _this;
    }
    Camion.prototype.setTara = function (tara) {
        this.tara = tara;
    };
    Camion.prototype.setLongitud = function (longitud) {
        this.longitud = longitud;
    };
    Camion.prototype.getTara = function () {
        return this.tara;
    };
    Camion.prototype.getLongitud = function () {
        return this.longitud;
    };
    return Camion;
}(Vehiculo));
var agregarMoto = function (marca, modelo, color, velMax, cilindrada) {
    return (new Moto(marca, parseInt(modelo), color, parseInt(velMax), parseInt(cilindrada)));
};
var agregarCamion = function (marca, modelo, color, velMax, tara, longitud) {
    return (new Camion(marca, parseInt(modelo), color, parseInt(velMax), parseInt(tara), parseInt(longitud)));
};
var crearArregloVehiculos = function (elemVehiculo) {
    var arregloDeVehiculos = new Array;
    for (var i = 0; i < listaVehiculos.length; i++) {
        elemVehiculo = listaVehiculos[i].split(',');
        if (elemVehiculo[0] == 'Camion') {
            arregloDeVehiculos[arregloDeVehiculos.length] = agregarCamion(elemVehiculo[1], elemVehiculo[2], elemVehiculo[3], elemVehiculo[4], elemVehiculo[5], elemVehiculo[6]);
        }
        else {
            arregloDeVehiculos[arregloDeVehiculos.length] = agregarMoto(elemVehiculo[1], elemVehiculo[2], elemVehiculo[3], elemVehiculo[4], elemVehiculo[5]);
        }
    }
    return arregloDeVehiculos;
};
//datosCom permite ingresar los DATOS COMUNES DEL VEHICULO
var datosCom = function () {
    var arrayVeh = new Array;
    var marca = readlineSync.question('Ingrese la marca del Vehiculo: ');
    var modelo = readlineSync.question('Ingrese el modelo del Vehiculo: ');
    var color = readlineSync.question('Ingrese el color del Vehiculo: ');
    var velMax = readlineSync.question('Ingrese la Velocidad Maxima del Vehiculo: ');
    arrayVeh.push(marca);
    arrayVeh.push(modelo);
    arrayVeh.push(color);
    arrayVeh.push(velMax);
    return arrayVeh;
};
//armarElemVeh permite crear un arreglo con los atributos de un Vehiculo
var armarElemVeh = function () {
    var elemVehiculo = datosCom();
    var var1;
    var var2;
    if (readlineSync.questionInt('Indique la Opcion 1 si quiere manipular un CAMION y Opcion 2 si quiere manipular una MOTO: ') == 1) {
        var1 = readlineSync.question('Ingrese la TARA del CAMION: ');
        var2 = readlineSync.question('Ingrese la LONGITUD del CAMION: ');
        elemVehiculo.push(var1);
        elemVehiculo.push(var2);
    }
    else {
        var1 = readlineSync.question('Ingrese la CILINDRADA de la MOTO: ');
        elemVehiculo.push(var1);
    }
    return elemVehiculo;
};
var agregarVehiculo = function (arregloDeVehiculos) {
    var arrayVeh = new Array;
    arrayVeh = armarElemVeh();
    if (arrayVeh.length == 6) {
        arregloDeVehiculos[arregloDeVehiculos.length] = agregarCamion(arrayVeh[0], arrayVeh[1], arrayVeh[2], arrayVeh[3], arrayVeh[4], arrayVeh[5]);
    }
    else {
        arregloDeVehiculos[arregloDeVehiculos.length] = agregarMoto(arrayVeh[0], arrayVeh[1], arrayVeh[2], arrayVeh[3], arrayVeh[4]);
    }
    return arregloDeVehiculos;
};
var verifAuto = function (elemVeh, arregloVeh) {
    for (var i = 0; i < arregloVeh.length; i++) {
        if (arregloDeVehiculos[i] instanceof Camion) {
            var camion = arregloDeVehiculos[i];
            if ((camion.getMarca() == elemVeh[0]) && camion.getModelo() == (parseInt(elemVeh[1])) && (camion.getColor() == elemVeh[2]) && (camion.getVelMax() == (parseInt(elemVeh[3])) && (camion.getTara() == (parseInt(elemVeh[4])) && (camion.getLongitud() == (parseInt(elemVeh[5])))))) {
                return i;
            }
        }
        else {
            var moto = arregloDeVehiculos[i];
            if ((moto.getMarca() == elemVeh[0]) && (moto.getModelo() == (parseInt(elemVeh[1]))) && (moto.getColor() == elemVeh[2]) && (moto.getVelMax() == (parseInt(elemVeh[3]))) && (moto.getCilindrada() == (parseInt(elemVeh[4])))) {
                return i;
            }
        }
    }
    return -1;
};
//------------------------------------------------------------------------------------------------------------
var vehiculos = fs.readFileSync('vehiculos.txt', 'utf8');
var listaVehiculos = vehiculos.split('\r\n');
var arregloDeVehiculos = new Array;
var elemVehiculo;
//Creamos el Arreglo de Vehiculos a partir del archivo de texto. 
arregloDeVehiculos = crearArregloVehiculos(elemVehiculo);
console.log('Vehiculos contiene los siguientes Vehiculos en el Arreglo de Vehiculos: ', arregloDeVehiculos);
console.log('--------------------------------------------------------------------');
//Agregamos un Vehiculo
console.log('Dar de ALTA un Vehiculos');
arregloDeVehiculos = agregarVehiculo(arregloDeVehiculos);
console.log('Vehiculos contiene los siguientes Vehiculos luego del ALTA: ', arregloDeVehiculos);
console.log('--------------------------------------------------------------------');
//Consultar por un Vehiculo en el Arreglo de Vehiculos
console.log('Ingrese los datos del Vehiculo para verificar su existencia: ');
elemVehiculo = armarElemVeh();
var posVeh = verifAuto(elemVehiculo, arregloDeVehiculos);
if (posVeh != -1)
    console.log('El VEHICULO existe');
else
    console.log('El VEHICULO no existe');
console.log('--------------------------------------------------------------------');
//Borrar un auto en el Arreglo de Autos         
console.log('Dar de BAJA un VEHICULO: ');
elemVehiculo = armarElemVeh();
posVeh = verifAuto(elemVehiculo, arregloDeVehiculos);
if (posVeh != -1)
    arregloDeVehiculos.splice(posVeh, 1);
else
    console.log('El VEHICULO indicado NO EXISTE');
console.log('Vehiculos contiene los siguientes Vehiculos luego de la BAJA: ', arregloDeVehiculos);
console.log('--------------------------------------------------------------------');
//Actualizar los datos de un Vehiculo en el Arreglo de Vehiculos  
console.log('ACTUALIZAR un Vehiculo');
elemVehiculo = armarElemVeh();
posVeh = verifAuto(elemVehiculo, arregloDeVehiculos);
console.log('pos ', posVeh);
if (posVeh != -1) {
    console.log('Ingrese los items a Actualizar');
    elemVehiculo = armarElemVeh();
    if (elemVehiculo.length == 6) { //Es un CAMION
        var cam = agregarCamion(elemVehiculo[0], elemVehiculo[1], elemVehiculo[2], elemVehiculo[3], elemVehiculo[4], elemVehiculo[5]);
        arregloDeVehiculos.splice(posVeh, 1, cam);
    }
    else {
        var moto = agregarMoto(elemVehiculo[0], elemVehiculo[1], elemVehiculo[2], elemVehiculo[3], elemVehiculo[4]);
        arregloDeVehiculos.splice(posVeh, 1, moto);
    }
}
else
    console.log('El VEHICULO indicado NO EXISTE');
console.log('Autos contiene los siguientes Autos luego de ACTUALIZAR: ', arregloDeVehiculos);
