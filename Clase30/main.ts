import {Legajos} from './Legajos';
import * as readlineSync from 'readline-sync';

let legajosAlum: Legajos = new Legajos();

legajosAlum.cargarAlumnos();

let cont: boolean = true;
while (cont) {
    let opcion: number = readlineSync.questionInt('Ingrese 1 si desea calcular el Promedio de un Alumno, 2 si desea calcular el promdio general ');

    switch(opcion) {
        case 1:
            let DNI: number = readlineSync.question('Ingrese el DNI del Alumno ');
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
