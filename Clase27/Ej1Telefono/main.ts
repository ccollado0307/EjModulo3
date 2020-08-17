import {Telefono} from './telefono';
import {Smartphone} from './smartphone';

let smartphone: Smartphone = new Smartphone();
smartphone.prender();
console.log(smartphone);

smartphone.apagar();
console.log(smartphone);

smartphone.prender();
smartphone.llamar('154604600');
smartphone.sacarFoto();