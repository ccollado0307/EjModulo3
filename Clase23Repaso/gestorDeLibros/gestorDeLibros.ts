import * as fs from 'fs';
import * as readlineSync from 'readline-sync'

class GestorDeArchivos {
    private ubicacion: string;
    private arreglo: Array<string>;
    
    constructor(ubicacion: string) { 
        let nombres: string = fs.readFileSync(ubicacion, 'utf8');
        this.arreglo = new Array();
        this.arreglo = nombres.split('\r\n');
    } 

    public mostrarArreglo (arreglo: Array<string>) {
        console.log('El archivo de texto contiene: ', arreglo);
    }

    public retornarArreglo () {
        return this.arreglo;
    }
}

class Libro {
    private ISBN: number;
    private titulo: string;
    private autor: string;
    private cantPag: number;
    private editorial: string;

    constructor(ISBN: number,titulo: string,autor: string,cantPag:number,editorial:string) {
        this.ISBN = ISBN;
        this.titulo = titulo;
        this.autor = autor;
        this.cantPag = cantPag;
        this.editorial = editorial;
    }

    public getISBN(): number {
        return this.ISBN;
    }

    public getTitulo(): string {
        return this.titulo;
    }

    public setTitulo (titulo: string): void {
        this.titulo = titulo;
    }

    public setAutor (autor: string): void {
        this.autor = autor;
    }

    public setCantPag (cantPag: number): void {
        this.cantPag = cantPag;
    }

    public setEditorial (editorial: string): void {
        this.editorial = editorial;
    }
}

class GestorDeLibros {
    private libros: Array<Libro>;
    
    constructor() { 
        this.libros = new Array();
    }    

    public getLibros(): Array<Libro> {
        return this.libros;
    }

    public insertarLibro(libro: Libro): void {
        this.libros.push(libro);
    }

    //Retorna 1 si lo encuentra, -1 si no lo encuentra
    public buscarLibro(ISBN: number): number {
        let libro: Libro;
        for (let i: number = 0; i < this.libros.length; i++) {
            libro = this.libros[i];
            if (libro.getISBN() == ISBN) {
                return i;
            }
        }
        return -1;
    }

    public consulLibro(pos: number): Libro {
        return this.libros[pos];
    }

    public actLibro(pos: number, libro: Libro): void {
        this.libros.splice(pos, 1, libro)
    }

    public elimLibro(pos: number): void {
        this.libros.splice(pos, 1)
    }
}


let leerLibros = (arregloLibros: Array<string>): GestorDeLibros => {
    let elem: Array<string>;
    let gestorLibros: GestorDeLibros = new GestorDeLibros();

    for (let i: number = 0; i < arregloLibros.length; i++) {
        let elem: Array<string> = arregloLibros[i].split(',');    
        let libro: Libro = new Libro (parseInt(elem[0]),elem[1],elem[2],parseInt(elem[3]),elem[4]);
        gestorLibros.insertarLibro(libro);
    }
    return gestorLibros;
}

//-------------------------------------
//Obtengo el arregloLibros a partir del archivo libros.txt
let ubicacion: string = 'gestorDeLibros/libros.txt';
let misLibros = new GestorDeArchivos(ubicacion);
let arregloLibros: Array<string> = misLibros.retornarArreglo();

let gestorDeLibros: GestorDeLibros = new GestorDeLibros();

//Creo el arreglo de Libros del tipo Gestor de Libros con los Libros del archivo .txt
gestorDeLibros = leerLibros(arregloLibros);
console.log('Gestor De Libros contiene los siguientes Libros: ', gestorDeLibros.getLibros()); 
console.log('\n');

//Insertar un Libro desde teclado
let ISBN: number = readlineSync.questionInt('Ingrese el ISBN del Libro a Insertar ');
let titulo: string = readlineSync.question('Ingrese el TITULO del Libro ');
let autor:string = readlineSync.question('Ingrese el AUTOR del Libro ');
let cantPag: number = readlineSync.questionInt('Ingrese la CANTIDAD de PAGINAS del Libro ');
let editorial:string = readlineSync.question('Ingrese la EDITORIAL del Libro ');
let libro: Libro = new Libro(ISBN,titulo,autor,cantPag,editorial);

gestorDeLibros.insertarLibro(libro);

console.log('Gestor De Libros contiene los siguientes Libros (luego de insertar): ', gestorDeLibros.getLibros()); 
console.log('\n');

//Consultar los datos de un Libro, indicando el ISBN
ISBN = readlineSync.questionInt('Ingrese el ISBN del Libro que desea Consultar ');
let pos: number = gestorDeLibros.buscarLibro(ISBN);
if (pos != -1) {
    let libro: Libro = gestorDeLibros.consulLibro(pos);
    console.log('El LIBRO es ', libro);
}
else console.log('El LIBRO cuyo ISBN es ', ISBN, ' no existe');

console.log('\n');

//Modificar los datos de un Libro, indicando el ISBN
ISBN = readlineSync.questionInt('Ingrese el ISBN del Libro que desea Actualizar ');

pos= gestorDeLibros.buscarLibro(ISBN);

if (pos != -1) {
    console.log('Ingrese los Datos del Libro a Actualizar ');
    titulo = readlineSync.question('Ingrese el TITULO del Libro ');
    autor = readlineSync.question('Ingrese el AUTOR del Libro ');
    cantPag = readlineSync.questionInt('Ingrese la CANTIDAD de PAGINAS del Libro ');
    editorial = readlineSync.question('Ingrese la EDITORIAL del Libro ');
    let libro: Libro = new Libro(ISBN,titulo,autor,cantPag,editorial);
    gestorDeLibros.actLibro(pos,libro);
}
else console.log('El LIBRO cuyo ISBN es ', ISBN, ' no existe');

console.log('Gestor De Libros contiene los siguientes Libros (luego de modificar): ', gestorDeLibros.getLibros()); 
console.log('\n');

//Eliminar un Libro, indicando el ISBN
ISBN = readlineSync.questionInt('Ingrese el ISBN del Libro que desea Eliminar ');
pos= gestorDeLibros.buscarLibro(ISBN);
if (pos != -1) {
    gestorDeLibros.elimLibro(pos);
}
else console.log('El LIBRO cuyo ISBN es ', ISBN, ' no existe');

console.log('Gestor De Libros contiene los siguientes Libros (luego de eliminar): ', gestorDeLibros.getLibros()); 