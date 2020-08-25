import {Figura} from './figura';
import {Rectangulo} from './rectangulo';
import {Circulo} from './circulo';
import * as readlineSync from 'readline-sync';

//let figura: Figura = new Figura(readlineSync.question('Ingrese el color del Rectangulo: '));

let rectangulo: Rectangulo = new Rectangulo(2,4,readlineSync.question('Ingrese el color del Rectangulo: '));
rectangulo.indicarCantLados();
console.log('El color del Rectangulo es: ', rectangulo.getColor());
console.log('El RECTANGULO es ', rectangulo);

let circulo: Circulo = new Circulo(readlineSync.question('Ingrese el color del Circulo: '));
circulo.indicarCantLados();
console.log('El Circulo es ', circulo);