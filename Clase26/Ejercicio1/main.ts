import {Auto} from './auto';
import {AutoCarrera} from './autoCarrera';
import * as readlineSync from 'readline-sync';

let auto:Auto = new Auto();
auto.acelerar();
console.log('El AUTO es ', auto);

let autoCarrera: AutoCarrera = new AutoCarrera();
autoCarrera.setMarca(readlineSync.question('Ingrese la marca del Vehiculo: '));
autoCarrera.acelerar();

console.log('El AUTO DE CARRERA es ', autoCarrera);