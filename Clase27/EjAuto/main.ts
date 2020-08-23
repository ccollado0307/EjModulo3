import {Auto} from './auto';
import {AutoCarrera} from './autoCarrera';

let auto: AutoCarrera = new AutoCarrera();
console.log('Auto sin acelerar ', auto);
auto.setColor('blanco');
auto.acelerar();
console.log('Auto despues de acelerar ', auto);