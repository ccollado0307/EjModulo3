import {Vehiculo} from './vehiculo';
import {Camioneta} from './camioneta';
import {AutoDeportivo} from './autoDeportivo';
import {AutoCiudad} from './autoCiudad';

let camioneta: Camioneta = new Camioneta('Toyota',false);
console.log('Esta es la CAMIONETA, al crearla ', camioneta);
camioneta.acelerar();
camioneta.setMarca('Ford');
camioneta.setColor('blanco');
camioneta.prender();
camioneta.modifCaja();
console.log('Esta es la CAMIONETA, al modificarla ', camioneta);

let autoDeportivo: AutoDeportivo = new AutoDeportivo('Hyundai');
console.log('Este es la AUTO DEPORTIVO, al crearlo ', autoDeportivo);
autoDeportivo.acelerar();
autoDeportivo.setMarca('Mercedes');
autoDeportivo.setColor('azul');
autoDeportivo.prender();
autoDeportivo.modifDescapotableCaja();
console.log('Este es la AUTO DEPORTIVO, al modificarlo ', autoDeportivo);

let autoCiudad: AutoCiudad = new AutoCiudad('Ford','manual');
console.log('Este es la AUTO CIDUDAD, al crearlo ', autoCiudad);
autoCiudad.acelerar();
autoCiudad.setMarca('Mercedes');
autoCiudad.setColor('negro noche');
autoCiudad.prender();
autoCiudad.setTipoCaja('automatica');
console.log('Este es la AUTO CIDUDAD, al modificarlo ', autoCiudad);