import * as readlineSync from 'readline-sync'

class Nodo {
    private fila: number;
    private columna: number;
    private valor: number;
    
    public constructor(fila: number, columna: number, valor: number) {
        this.fila = fila;
        this.columna = columna;
        this.valor = valor;
    }

    public getFila(): number {
        return this.fila;
    }

    public getColumna(): number {
        return this.columna;
    }

    public getValor(): number {
        return this.valor;
    } 

    public setFila(fila: number): void {
        this.fila = fila;
    }

    public setColumna(columna: number): void {
        this.columna = columna;
    }

    public setValor(valor: number): void {
        this.valor = valor;
    }
}
class Matriz {
    private matriz: Array<Nodo>;

    public constructor() {
        this.matriz = [];
    }

    //Esta funcion recibe como parametro la matriz e instancia a la Clase Matriz 
    public cargarMatriz = (arreglo: Array<Array<number>>) => { 
        let arregloColumna: Array<number>;
        for (let i: number = 0; i < arreglo.length; i++) {
            arregloColumna = arreglo[i];

            for (let j: number = 0; j < arregloColumna.length; j++) {
                let nodo: Nodo = new Nodo(i,j,arregloColumna[j]);
                this.matriz.push(nodo);
            }
        }
    }

    public getElem = (fila: number, columna: number): number => { 
        let nodo: Nodo = this.matriz[this.matriz.length-1]; //Tomo el ultimo NODO para saber la cant de FILAS y COLUMNAS
        
        let i: number = nodo.getFila();
        let j: number = nodo.getColumna();
        
        let pos: number = -1;//Lo utilizo para moverme dentro del arreglo 
        for (let iCont: number = 0; iCont <= i; iCont++) {
            pos++; 
            if (iCont == fila) {
                for (let jCont = 0; jCont <= j; jCont++) {
                    nodo = this.matriz[pos];
                    if (jCont == columna) {
                        return nodo.getValor();
                    }
                    pos++; //Adelanto una fila
                }
            }
            else {
                pos = pos + j;//Adelanto todas la columnas
            }
        }
        return -1;
    }
}

//Esta funcion devuelve el valor en la posicion (i,j)


//Esta funcion recibe como paramaetro la cant Filas y Columnas y devuelve una matriz
let cargarArreglo = (cantF: number, cantC: number): Array<Array<number>> => { 
    let arregloF = new Array(cantF); 
    
    for (let i: number = 0; i < cantF ; i++) {
        let arregloC = new Array(cantC);
        for (let j: number = 0; j < cantC ; j++) {
            arregloC[j] = readlineSync.questionInt('Ingrese el Valor ');
        }
        arregloF[i] = arregloC;
    }
    return arregloF;
}

//--------------------------------------------------------------------------------------------------
let aux1: number = readlineSync.questionInt('Ingrese la Cantidad de Filas ');
let aux2: number = readlineSync.questionInt('Ingrese la Cantidad de Columnas ');

let arregloPrueba = cargarArreglo(aux1,aux2);
console.log('La MATRIZ esta dada por los pares ', arregloPrueba);

let matriz: Matriz = new Matriz;
matriz.cargarMatriz(arregloPrueba) 
console.log('La MATRIZ esta dada por los nodos ', matriz);

aux1 = readlineSync.questionInt('Ingrese la Fila que desea consultar ');
aux2 = readlineSync.questionInt('Ingrese la Columna que desea consultar ');
let valor: number = matriz.getElem(aux1,aux2);
console.log('El VALOR ', valor, 'es el que corresponde a la posicion [', aux1,',',aux2,']');