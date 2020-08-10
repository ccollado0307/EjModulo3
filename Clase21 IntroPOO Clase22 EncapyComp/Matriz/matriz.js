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

var matriz = new Matriz;
matriz.cargarMatriz(arregloPrueba);
console.log('La MATRIZ esta dada por los nodos ', matriz);
aux1 = readlineSync.questionInt('Ingrese la Fila que desea consultar ');
aux2 = readlineSync.questionInt('Ingrese la Columna que desea consultar ');
var valor = matriz.getElem(aux1, aux2);
console.log('El VALOR ', valor, 'es el que corresponde a la posicion [', aux1, ',', aux2, ']');
