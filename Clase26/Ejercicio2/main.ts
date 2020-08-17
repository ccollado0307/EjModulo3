import {Figura} from './figura';
import {Rectangulo} from './rectangulo';
import {Circulo} from './circulo';
import * as readlineSync from 'readline-sync';

//let figura: Figura = new Figura(readlineSync.question('Ingrese el color del Rectangulo: '));

let rectangulo: Rectangulo = new Rectangulo(2,4,readlineSync.question('Ingrese el color del Rectangulo: '));
console.log('Area del Rectangulo ', rectangulo.calcularArea());
console.log('Perimetro del Rectangulo ', rectangulo.calcularPerimetro());
console.log('El color del Rectangulo es: ', rectangulo.getColor());
console.log('El RECTANGULO es ', rectangulo);

let circulo: Circulo = new Circulo(readlineSync.question('Ingrese el color del Circulo: '));
console.log('Area del Circulo ', circulo.calcularArea());
console.log('Perimetro del Circulo ', circulo.calcularPerimetro());
console.log('El Circulo es ', circulo);