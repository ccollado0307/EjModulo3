import * as fs from 'fs';
import * as readlineSync from 'readline-sync';

class Auto {
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

let agregarAuto = (marca: string, modelo:number, color:string, velMax:number, arregloDeAutos:Array<Auto>): Array<Auto> => {
    arregloDeAutos[arregloDeAutos.length] = new Auto(marca,modelo,color,velMax);
    return arregloDeAutos
}

let datosAuto = (): Array<string> => {
    let arrayAuto: Array<string> = new Array;
    
    let marca: string = readlineSync.question('Ingrese la marca del Auto: ');
    let modelo: string = readlineSync.question('Ingrese el modelo del Auto: ');
    let color: string = readlineSync.question('Ingrese el color del Auto: ');
    let velMax: string = readlineSync.question('Ingrese la Velocidad Maxima del Auto: ');
    
    arrayAuto.push(marca);
    arrayAuto.push(modelo);
    arrayAuto.push(color);
    arrayAuto.push(velMax);
    
    return arrayAuto
};

let verifAuto = (elemAuto: Array<string>, arregloAutos: Array<Auto>): number => {
    for (let i: number = 0; i < arregloAutos.length; i++) {
        if ((arregloAutos[i].getMarca() == elemAuto[0]) && arregloAutos[i].getModelo() == (parseInt(elemAuto[1])) && (arregloAutos[i].getColor() == elemAuto[2]) && (arregloAutos[i].getVelMax() == (parseInt(elemAuto[3])))) {
            return i;
        } 
    }
    return -1;
}

//------------------------------------------------------------------------------------------------------------
let autos: string = fs.readFileSync('registroAutomotor/autos.txt', 'utf8');
let listaAutos: Array<string> = autos.split('\r\n');

let arregloAutos: Array<Auto> = new Array;

let elemAuto: Array<string>;

//Creamos el Arreglo de Autos a partir del archivo de texto. 
for (let i: number = 0; i < listaAutos.length; i++) {
    elemAuto = listaAutos[i].split(',');    
    arregloAutos = agregarAuto(elemAuto[0],parseInt(elemAuto[1]),elemAuto[2],parseInt(elemAuto[3]),arregloAutos);
}
console.log('Autos contiene los siguientes Autos en el Arreglo de Autos: ', arregloAutos); 

//Agregamos un Auto al Arreglo de Autos
console.log('Ingrese los datos del AUTO a dar de ALTA: ');
elemAuto = datosAuto();
arregloAutos = agregarAuto(elemAuto[0],parseInt(elemAuto[1]),elemAuto[2],parseInt(elemAuto[3]),arregloAutos); 
console.log('Autos contiene los siguientes Autos luego del ALTA: ', arregloAutos);

//Consultar por un auto en el Arreglo de Autos
console.log('Ingrese los datos del AUTO para verificar su existencia: ');
elemAuto = datosAuto(); 
let posAuto: number = verifAuto(elemAuto,arregloAutos); 

if (posAuto != -1) 
    console.log('El AUTO existe');
else 
    console.log('El AUTO no existe');

//Borrar un auto en el Arreglo de Autos         
console.log('Dar de BAJA un Auto: ');
elemAuto = datosAuto(); 
posAuto = verifAuto(elemAuto,arregloAutos); 

if (posAuto != -1)
    arregloAutos.splice(posAuto, 1);
else
    console.log('El AUTO indicado NO EXISTE');

console.log('Autos contiene los siguientes Autos luego de la BAJA: ', arregloAutos);

//Actualizar los datos de un Auto en el Arreglo de Autos         
console.log('Ingrese el Auto que desea actualizar : ');
elemAuto = datosAuto(); 
posAuto = verifAuto(elemAuto,arregloAutos); 

if (posAuto != -1) {
    console.log('Ingrese el/los datos del Auto a actualizar : ');
    elemAuto = datosAuto();
    let auto: Auto;
    auto = arregloAutos[posAuto];
    auto.setMarca(elemAuto[0]);
    auto.setModelo(parseInt(elemAuto[1]));
    auto.setColor(elemAuto[2]);
    auto.setVelocidadMaxima(parseInt(elemAuto[3]));
}
else
    console.log('El AUTO indicado NO EXISTE');


console.log('Autos contiene los siguientes Autos luego de ACTUALIZAR: ', arregloAutos);