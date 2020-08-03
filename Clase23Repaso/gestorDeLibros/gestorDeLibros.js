"use strict";
exports.__esModule = true;
var fs = require("fs");
var readlineSync = require("readline-sync");
var GestorDeArchivos = /** @class */ (function () {
    function GestorDeArchivos(ubicacion) {
        var nombres = fs.readFileSync(ubicacion, 'utf8');
        this.arreglo = new Array();
        this.arreglo = nombres.split('\r\n');
    }
    GestorDeArchivos.prototype.mostrarArreglo = function (arreglo) {
        console.log('El archivo de texto contiene: ', arreglo);
    };
    GestorDeArchivos.prototype.retornarArreglo = function () {
        return this.arreglo;
    };
    return GestorDeArchivos;
}());
var Libro = /** @class */ (function () {
    function Libro(ISBN, titulo, autor, cantPag, editorial) {
        this.ISBN = ISBN;
        this.titulo = titulo;
        this.autor = autor;
        this.cantPag = cantPag;
        this.editorial = editorial;
    }
    Libro.prototype.getISBN = function () {
        return this.ISBN;
    };
    Libro.prototype.getTitulo = function () {
        return this.titulo;
    };
    Libro.prototype.setTitulo = function (titulo) {
        this.titulo = titulo;
    };
    Libro.prototype.setAutor = function (autor) {
        this.autor = autor;
    };
    Libro.prototype.setCantPag = function (cantPag) {
        this.cantPag = cantPag;
    };
    Libro.prototype.setEditorial = function (editorial) {
        this.editorial = editorial;
    };
    return Libro;
}());
var GestorDeLibros = /** @class */ (function () {
    function GestorDeLibros() {
        this.libros = new Array();
    }
    GestorDeLibros.prototype.getLibros = function () {
        return this.libros;
    };
    GestorDeLibros.prototype.insertarLibro = function (libro) {
        this.libros.push(libro);
    };
    //Retorna 1 si lo encuentra, -1 si no lo encuentra
    GestorDeLibros.prototype.buscarLibro = function (ISBN) {
        var libro;
        for (var i = 0; i < this.libros.length; i++) {
            libro = this.libros[i];
            if (libro.getISBN() == ISBN) {
                return i;
            }
        }
        return -1;
    };
    GestorDeLibros.prototype.consulLibro = function (pos) {
        return this.libros[pos];
    };
    GestorDeLibros.prototype.actLibro = function (pos, libro) {
        this.libros.splice(pos, 1, libro);
    };
    GestorDeLibros.prototype.elimLibro = function (pos) {
        this.libros.splice(pos, 1);
    };
    return GestorDeLibros;
}());
var leerLibros = function (arregloLibros) {
    var elem;
    var gestorLibros = new GestorDeLibros();
    for (var i = 0; i < arregloLibros.length; i++) {
        var elem_1 = arregloLibros[i].split(',');
        var libro_1 = new Libro(parseInt(elem_1[0]), elem_1[1], elem_1[2], parseInt(elem_1[3]), elem_1[4]);
        gestorLibros.insertarLibro(libro_1);
    }
    return gestorLibros;
};
//-------------------------------------
//Obtengo el arregloLibros a partir del archivo libros.txt
var ubicacion = 'gestorDeLibros/libros.txt';
var misLibros = new GestorDeArchivos(ubicacion);
var arregloLibros = misLibros.retornarArreglo();
var gestorDeLibros = new GestorDeLibros();
//Creo el arreglo de Libros del tipo Gestor de Libros con los Libros del archivo .txt
gestorDeLibros = leerLibros(arregloLibros);
console.log('Gestor De Libros contiene los siguientes Libros: ', gestorDeLibros.getLibros());
console.log('\n');
//Insertar un Libro desde teclado
var ISBN = readlineSync.questionInt('Ingrese el ISBN del Libro a Insertar ');
var titulo = readlineSync.question('Ingrese el TITULO del Libro ');
var autor = readlineSync.question('Ingrese el AUTOR del Libro ');
var cantPag = readlineSync.questionInt('Ingrese la CANTIDAD de PAGINAS del Libro ');
var editorial = readlineSync.question('Ingrese la EDITORIAL del Libro ');
var libro = new Libro(ISBN, titulo, autor, cantPag, editorial);
gestorDeLibros.insertarLibro(libro);
console.log('Gestor De Libros contiene los siguientes Libros (luego de insertar): ', gestorDeLibros.getLibros());
console.log('\n');
//Consultar los datos de un Libro, indicando el ISBN
ISBN = readlineSync.questionInt('Ingrese el ISBN del Libro que desea Consultar ');
var pos = gestorDeLibros.buscarLibro(ISBN);
if (pos != -1) {
    var libro_2 = gestorDeLibros.consulLibro(pos);
    console.log('El LIBRO es ', libro_2);
}
else
    console.log('El LIBRO cuyo ISBN es ', ISBN, ' no existe');
console.log('\n');
//Modificar los datos de un Libro, indicando el ISBN
ISBN = readlineSync.questionInt('Ingrese el ISBN del Libro que desea Actualizar ');
pos = gestorDeLibros.buscarLibro(ISBN);
if (pos != -1) {
    console.log('Ingrese los Datos del Libro a Actualizar ');
    titulo = readlineSync.question('Ingrese el TITULO del Libro ');
    autor = readlineSync.question('Ingrese el AUTOR del Libro ');
    cantPag = readlineSync.questionInt('Ingrese la CANTIDAD de PAGINAS del Libro ');
    editorial = readlineSync.question('Ingrese la EDITORIAL del Libro ');
    var libro_3 = new Libro(ISBN, titulo, autor, cantPag, editorial);
    gestorDeLibros.actLibro(pos, libro_3);
}
else
    console.log('El LIBRO cuyo ISBN es ', ISBN, ' no existe');
console.log('Gestor De Libros contiene los siguientes Libros (luego de modificar): ', gestorDeLibros.getLibros());
console.log('\n');
//Eliminar un Libro, indicando el ISBN
ISBN = readlineSync.questionInt('Ingrese el ISBN del Libro que desea Eliminar ');
pos = gestorDeLibros.buscarLibro(ISBN);
if (pos != -1) {
    gestorDeLibros.elimLibro(pos);
}
else
    console.log('El LIBRO cuyo ISBN es ', ISBN, ' no existe');
console.log('Gestor De Libros contiene los siguientes Libros (luego de eliminar): ', gestorDeLibros.getLibros());
