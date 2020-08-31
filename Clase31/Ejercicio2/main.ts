import {Vendedor} from './vendedor';
import {AutoBuilder} from './autoBuilder';
import {AutoCiudadBuilder} from './autoCiudad';
import {AutoCarreraBuilder} from './autoCarrera';
import {Auto} from './auto';

let vendedor = new Vendedor();
let autoCiudad: AutoBuilder = new AutoCiudadBuilder();
let autoCarrera: AutoBuilder = new AutoCarreraBuilder();

vendedor.setAutoBuilder(autoCiudad);
vendedor.constAuto();

let auto: Auto = vendedor.getAuto();

console.log('Auto de Ciudad ',auto);

vendedor.setAutoBuilder(autoCarrera);
vendedor.constAuto();

auto = vendedor.getAuto();

console.log('Auto de Carrera', auto);