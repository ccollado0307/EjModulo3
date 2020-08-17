import {Persona} from './persona';
import {Carrera} from './carrera';
import {Oficial} from './oficial';
import {Suboficial} from './suboficial';
import * as readlineSync from 'readline-sync';

let persona:Persona = new Persona('22.345.678','Juan Perez');
console.log('Es una PERSONA ',persona);

let carrera: Carrera = new Carrera('Analista',true);
let oficial: Oficial = new Oficial('21.345.678','Lucas Rosas',carrera,true);
oficial.setGrado();
console.log('Es un OFICIAL ', oficial);

let sufoficial: Suboficial = new Suboficial('21.345.678','Lucas Rosas',true);
sufoficial.setGrado();
console.log('Es un SUBOFICIAL ', sufoficial); 