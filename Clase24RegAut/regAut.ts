import * as fs from 'fs';
import * as readlineSync from 'readline-sync';

class Vehiculo {
    private marca: String ;
    private modelo: number;
    private color: String;
    private velocidadMaxima: number ;

    public constructor(marca: String, modelo: number, color: String, velocidadMaxima: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.velocidadMaxima = velocidadMaxima;
    }

    public setMarca (marcaAuto: String ): void {
        this.marca = marcaAuto;
    }

    public setModelo (modeloAuto: number ): void {
        this.modelo = modeloAuto;
    }
    
    public setColor (colorAuto: String ): void {
        this.color = colorAuto;
    }

    public setVelocidadMaxima(velocidadMaxima: number): void {
        this.velocidadMaxima = velocidadMaxima;
     }

    public getMarca() :String {
        return this.marca;
    }

    public getModelo () :Number {
        return this.modelo;
    }

    public getColor() :String {
        return this.color;
    }

    public getVelMax () :Number {
        return this.velocidadMaxima;
    }
}

class Moto extends Vehiculo {
    private cilindrada: number;

    public constructor(marca: String, modelo: number, color: String, velocidadMaxima: number, cilindrada: number) {
        super(marca, modelo, color, velocidadMaxima);
        this.cilindrada = cilindrada;
    }

    public getCilindrada (): number {
        return this.cilindrada;
    }

}

class Camion extends Vehiculo {
    private tara: number;
    private longitud: number;

    public constructor(marca: String, modelo: number, color: String, velocidadMaxima: number, tara: number, longitud: number) {
        super(marca, modelo, color, velocidadMaxima);
        this.tara = tara;
        this.longitud = longitud;
    }
    
    public setTara (tara: number): void {
        this.tara = tara;
    }

    public setLongitud (longitud: number): void {
        this.longitud = longitud;
    }

    public getTara (): number {
        return this.tara;
    }

    public getLongitud (): number {
        return this.longitud;
    }
}

let agregarMoto = (marca: string, modelo:string, color:string, velMax:string, cilindrada: string): Moto => {
    return (new Moto(marca,parseInt(modelo),color,parseInt(velMax),parseInt(cilindrada)));
}

let agregarCamion = (marca: string, modelo:string, color:string, velMax:string, tara: string, longitud: string): Camion => {
    return(new Camion(marca,parseInt(modelo),color,parseInt(velMax),parseInt(tara),parseInt(longitud)));
}

let crearArregloVehiculos = (elemVehiculo: Array<string>): Array<Vehiculo> => {
    let arregloDeVehiculos: Array<Vehiculo> = new Array;
   
    for (let i: number = 0; i < listaVehiculos.length; i++) {
        elemVehiculo = listaVehiculos[i].split(',');  
        if (elemVehiculo[0] == 'Camion') {
            arregloDeVehiculos[arregloDeVehiculos.length] = agregarCamion(elemVehiculo[1],elemVehiculo[2],elemVehiculo[3],elemVehiculo[4],elemVehiculo[5],elemVehiculo[6]);
        }
        else {
            arregloDeVehiculos[arregloDeVehiculos.length] = agregarMoto(elemVehiculo[1],elemVehiculo[2],elemVehiculo[3],elemVehiculo[4],elemVehiculo[5]);
        }
    }
    return arregloDeVehiculos;
}

//datosCom permite ingresar los DATOS COMUNES DEL VEHICULO
let datosCom = (): Array<string> =>{ 
    let arrayVeh: Array<string> = new Array;

    let marca: string = readlineSync.question('Ingrese la marca del Vehiculo: ');
    let modelo: string = readlineSync.question('Ingrese el modelo del Vehiculo: ');
    let color: string = readlineSync.question('Ingrese el color del Vehiculo: ');
    let velMax: string = readlineSync.question('Ingrese la Velocidad Maxima del Vehiculo: ');
    arrayVeh.push(marca);
    arrayVeh.push(modelo);
    arrayVeh.push(color);
    arrayVeh.push(velMax);

    return arrayVeh;
}

//armarElemVeh permite crear un arreglo con los atributos de un Vehiculo
let armarElemVeh = (): Array<string> => {
    let elemVehiculo: Array<string> = datosCom(); 
    let var1: string;
    let var2: string; 

    if (readlineSync.questionInt('Indique la Opcion 1 si quiere manipular un CAMION y Opcion 2 si quiere manipular una MOTO: ') == 1) {
        var1 = readlineSync.question('Ingrese la TARA del CAMION: ');
        var2 = readlineSync.question('Ingrese la LONGITUD del CAMION: ');
        elemVehiculo.push(var1);
        elemVehiculo.push(var2);
    }
    else {
        var1 = readlineSync.question('Ingrese la CILINDRADA de la MOTO: ');
        elemVehiculo.push(var1);
    }
    return elemVehiculo;
}

let agregarVehiculo = (arregloDeVehiculos: Array<Vehiculo>): Array<Vehiculo> =>{
    let arrayVeh: Array<string> = new Array;
   
    arrayVeh = armarElemVeh();
    
    if (arrayVeh.length == 6) {
        arregloDeVehiculos[arregloDeVehiculos.length] = agregarCamion(arrayVeh[0],arrayVeh[1],arrayVeh[2],arrayVeh[3],arrayVeh[4],arrayVeh[5]);
    }
    else {
        arregloDeVehiculos[arregloDeVehiculos.length] = agregarMoto(arrayVeh[0],arrayVeh[1],arrayVeh[2],arrayVeh[3],arrayVeh[4]);
    } 
    return arregloDeVehiculos;
}

let verifAuto = (elemVeh: Array<string>, arregloVeh: Array<Vehiculo>): number => {
    for (let i: number = 0; i < arregloVeh.length; i++) {
        if (arregloDeVehiculos[i] instanceof Camion) { 
            let camion = <Camion> arregloDeVehiculos[i];
            if ((camion.getMarca() == elemVeh[0]) && camion.getModelo() == (parseInt(elemVeh[1])) && (camion.getColor() == elemVeh[2]) && (camion.getVelMax() == (parseInt(elemVeh[3])) && (camion.getTara() == (parseInt(elemVeh[4])) && (camion.getLongitud() == (parseInt(elemVeh[5])))))) {
                return i;
            } 
        }
        else {
            let moto = <Moto> arregloDeVehiculos[i];
            if (
                (moto.getMarca() == elemVeh[0]) && (moto.getModelo() == (parseInt(elemVeh[1]))) && (moto.getColor() == elemVeh[2]) && (moto.getVelMax() == (parseInt(elemVeh[3]))) && (moto.getCilindrada() == (parseInt(elemVeh[4]))) ) {
                return i;
            }
        }   
    }
    return -1;
}

//------------------------------------------------------------------------------------------------------------
let vehiculos: string = fs.readFileSync('vehiculos.txt', 'utf8');
let listaVehiculos: Array<string> = vehiculos.split('\r\n');

let arregloDeVehiculos: Array<Vehiculo> = new Array;
let elemVehiculo: Array<string>;

//Creamos el Arreglo de Vehiculos a partir del archivo de texto. 
arregloDeVehiculos = crearArregloVehiculos(elemVehiculo);
console.log('Vehiculos contiene los siguientes Vehiculos en el Arreglo de Vehiculos: ', arregloDeVehiculos); 
console.log('--------------------------------------------------------------------');

//Agregamos un Vehiculo
console.log('Dar de ALTA un Vehiculos');
arregloDeVehiculos = agregarVehiculo(arregloDeVehiculos);
console.log('Vehiculos contiene los siguientes Vehiculos luego del ALTA: ', arregloDeVehiculos);
console.log('--------------------------------------------------------------------');

//Consultar por un Vehiculo en el Arreglo de Vehiculos
console.log('Ingrese los datos del Vehiculo para verificar su existencia: ');
elemVehiculo = armarElemVeh();

let posVeh: number = verifAuto(elemVehiculo,arregloDeVehiculos); 

if (posVeh != -1) 
    console.log('El VEHICULO existe');
else 
    console.log('El VEHICULO no existe');

console.log('--------------------------------------------------------------------');    

//Borrar un auto en el Arreglo de Autos         
console.log('Dar de BAJA un VEHICULO: ');
elemVehiculo = armarElemVeh(); 

posVeh = verifAuto(elemVehiculo,arregloDeVehiculos); 

if (posVeh != -1)
    arregloDeVehiculos.splice(posVeh, 1);
else
    console.log('El VEHICULO indicado NO EXISTE');

console.log('Vehiculos contiene los siguientes Vehiculos luego de la BAJA: ', arregloDeVehiculos);

console.log('--------------------------------------------------------------------');

//Actualizar los datos de un Vehiculo en el Arreglo de Vehiculos  
console.log('ACTUALIZAR un Vehiculo');    
elemVehiculo = armarElemVeh(); 
 
posVeh = verifAuto(elemVehiculo,arregloDeVehiculos); 
console.log('pos ', posVeh);
if (posVeh != -1) {
    console.log('Ingrese los items a Actualizar');
    elemVehiculo = armarElemVeh();
    if (elemVehiculo.length == 6) {//Es un CAMION
        let cam = <Camion> agregarCamion(elemVehiculo[0],elemVehiculo[1],elemVehiculo[2],elemVehiculo[3],elemVehiculo[4],elemVehiculo[5]);
        arregloDeVehiculos.splice(posVeh, 1, cam);
    }
    else {
        let moto = <Moto> agregarMoto(elemVehiculo[0],elemVehiculo[1],elemVehiculo[2],elemVehiculo[3],elemVehiculo[4]);
        arregloDeVehiculos.splice(posVeh, 1, moto);
    }
}
else
    console.log('El VEHICULO indicado NO EXISTE');

console.log('Autos contiene los siguientes Autos luego de ACTUALIZAR: ', arregloDeVehiculos);