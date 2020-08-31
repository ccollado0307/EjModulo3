"use strict";
exports.__esModule = true;
var Legajos_1 = require("./Legajos");
var readlineSync = require("readline-sync");
var legajosAlum = new Legajos_1.Legajos();
legajosAlum.cargarAlumnos();
var cont = true;
while (cont) {
    var opcion = readlineSync.questionInt('Ingrese 1 si desea calcular el Promedio de un Alumno, 2 si desea calcular el promdio general ');
    switch (opcion) {
        case 1:
            var DNI = readlineSync.question('Ingrese el DNI del Alumno ');
            console.log('El PROMEDIO del ALUMNO es ', legajosAlum.promAlumno(DNI));
            break;
        case 2:
            console.log('El PROMEDIO GENERAL es ', legajosAlum.promGeneral());
            break;
        default:
            cont = false;
            break;
    }
}
