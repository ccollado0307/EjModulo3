"use strict";
exports.__esModule = true;
var readlineSync = require("readline-sync");
var Nodo = /** @class */ (function () {
    function Nodo(fila, columna, valor) {
        this.fila = fila;
        this.columna = columna;
        this.valor = valor;
    }
    Nodo.prototype.getFila = function () {
        return this.fila;
    };
    Nodo.prototype.getColumna = function () {
        return this.columna;
    };
    Nodo.prototype.getValor = function () {
        return this.valor;
    };
    Nodo.prototype.setFila = function (fila) {
        this.fila = fila;
    };
    Nodo.prototype.setColumna = function (columna) {
        this.columna = columna;
    };
    Nodo.prototype.setValor = function (valor) {
        this.valor = valor;
    };
    return Nodo;
}());
//Esta funcion devuelve el valor en la posicion (i,j)
var getElem = function (fila, columna, matriz) {
    var nodo = matriz[matriz.length - 1]; //Tomo el ultimo NODO para saber la cant de FILAS y COLUMNAS
    var i = nodo.getFila();
    var j = nodo.getColumna();
    var pos = -1; //Lo utilizo para moverme dentro del arreglo 
    for (var iCont = 0; iCont <= i; iCont++) {
        pos++;
        if (iCont == fila) {
            for (var jCont = 0; jCont <= j; jCont++) {
                nodo = matriz[pos];
                if (jCont == columna) {
                    return nodo.getValor();
                }
                pos++; //Adelanto una fila
            }
        }
        else {
            pos = pos + j; //Adelanto todas la columnas
        }
    }
    return -1;
};
//Esta funcion recibe como parametro la matriz e instancia a la Clase Matriz 
var cargarMatriz = function (arreglo) {
    var matriz = [];
    var arregloColumna;
    for (var i = 0; i < arreglo.length; i++) {
        arregloColumna = arreglo[i];
        for (var j = 0; j < arregloColumna.length; j++) {
            var nodo = new Nodo(i, j, arregloColumna[j]);
            matriz.push(nodo);
        }
    }
    return matriz;
};
//Esta funcion recibe como paramaetro la cant Filas y Columnas y devuelve una matriz
var cargarArreglo = function (cantF, cantC) {
    var arregloF = new Array(cantF);
    for (var i = 0; i < cantF; i++) {
        var arregloC = new Array(cantC);
        for (var j = 0; j < cantC; j++) {
            arregloC[j] = readlineSync.questionInt('Ingrese el Valor ');
        }
        arregloF[i] = arregloC;
    }
    return arregloF;
};
//--------------------------------------------------------------------------------------------------
var aux1 = readlineSync.questionInt('Ingrese la Cantidad de Filas ');
var aux2 = readlineSync.questionInt('Ingrese la Cantidad de Columnas ');
var arregloPrueba = cargarArreglo(aux1, aux2);
console.log('La MATRIZ esta dada por los pares ', arregloPrueba);
var matriz = cargarMatriz(arregloPrueba);
console.log('La MATRIZ esta dada por los nodos ', matriz);
aux1 = readlineSync.questionInt('Ingrese la Fila que desea consultar ');
aux2 = readlineSync.questionInt('Ingrese la Columna que desea consultar ');
var valor = getElem(aux1, aux2, matriz);
console.log('El VALOR ', valor, 'es el que corresponde a la posicion [', aux1, ',', aux2, ']');
