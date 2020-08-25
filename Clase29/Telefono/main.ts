import {TelefonoConCamara} from "./telefonoConCamara";
import * as readlineSync from 'readline-sync';

let telefonoConCamara: TelefonoConCamara = new TelefonoConCamara;
telefonoConCamara.prenderApagar();
telefonoConCamara.sacarFoto();

let numero: number = readlineSync.question('Ingrese el numero al cual desea hablar ');
let llamada: boolean = true;
try {
    llamada = telefonoConCamara.mandarMensaje('Llamar al numero ', numero);
    } catch(error) {
    console.log('No se puede realizar la llamada');
    llamada = false;
    }

console.log("\n");
console.log('Telefono con Camara ', telefonoConCamara);