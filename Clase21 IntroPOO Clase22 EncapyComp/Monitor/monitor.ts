import * as readlineSync from 'readline-sync'

class Monitor {
    private marca: string;
    private modelo: string; 
    private estaEncendido: boolean
    
    public constructor(marca: string, modelo: string) {
        this.marca = marca;
        this.modelo = modelo;
        this.estaEncendido = false;
    }

    public encenderApagar(): void {
        if (this.estaEncendido)
            this.estaEncendido = false;
        else
            this.estaEncendido = true;
    }

    public indicarMarca(marcaMon:string): void {
        this.marca = marcaMon;
    }
    
    public indicarModelo(modeloMon:string): void {
        this.modelo = modeloMon;
    }
 }

let miMonitor = new Monitor(readlineSync.question('Ingrese la MARCA del Monitor: '), readlineSync.question('Ingrese el MODELO del Monitor: '));

console.log(miMonitor);
 
miMonitor.encenderApagar();
miMonitor.indicarMarca(readlineSync.question('Ingrese la MARCA del Monitor: '));
miMonitor.indicarModelo(readlineSync.question('Ingrese el MODELO del Monitor: '));

console.log(miMonitor);