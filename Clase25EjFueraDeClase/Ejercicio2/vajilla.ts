import * as readlineSync from 'readline-sync';

class Vajilla {
    private marca: string;
    private color: string;
    protected material: string;

    public constructor(marca: string, color: string) {
        this.marca = marca;
        this.color = color;
        this.material = 'material';
    }

    public setMarca(marca: string): void {
        this.marca = marca;
    }

    public getMarca(): string {
        return this.marca;
    }

    public setColor(color: string): void {
        this.color = color;
    }

    public getColor(): string {
        return this.color;
    }

    public setMaterial(): void {
        this.material = '';
    }
}

class Plato extends Vajilla {
    private diametro: string;
    private disenio: string;

    public constructor(marca: string, color: string, material: string, diametro: string, disenio: string) {
        super(marca, color);
        this.diametro = diametro;
        this.disenio = disenio;
    };

    public setDiametro(diametro: string): void {
        this.diametro = diametro;
    }

    public getDiametro(): string {
        return this.diametro;
    }

    public setDisenio(disenio: string): void {
        this.disenio = disenio;
    }

    public getDisenio(): string {
        return this.disenio;
    }

    public setMaterial () {
        this.material = 'melamina'
    }
}

class Manija {
    private tipo: string;

    public constructor(tipo: string) {
        this.tipo = tipo;
    }

    public getTipo(): string {
        return this.tipo;
    }
}

class Fuente extends Vajilla {
    private matBase: string;
    private forma: string;
    private manija: Manija;

    public constructor(marca: string, color: string, material: string, forma:string, manija: Manija) {
        super(marca, color);
        this.forma = forma;
        this.manija = manija;
    }

    public getMaterialBase(): string {
        return this.matBase;
    }

    public setMaterial () {
        this.material = 'loza'
    }
}

let vajilla:Vajilla = new Vajilla(readlineSync.question('Ingrese la marca '),readlineSync.question('Ingrese el color '));
console.log('Esta es la VAJILLA ', vajilla);
console.log('------------------------------------------------------------');

let plato: Plato = new Plato(readlineSync.question('Ingrese la marca '),readlineSync.question('Ingrese el color '),readlineSync.question('Ingrese la material '),readlineSync.question('Ingrese el diametro '),readlineSync.question('Ingrese el diseño '));
plato.setMaterial();
console.log('El COLOR del PLATO es', plato.getColor());
console.log('Este es el PLATO  ', plato);
console.log('------------------------------------------------------------');

let manija: Manija = new Manija(readlineSync.question('Ingrese el manija '));
let fuente: Fuente = new Fuente(readlineSync.question('Ingrese la marca '),readlineSync.question('Ingrese el color '),readlineSync.question('Ingrese la material '),readlineSync.question('Ingrese el forma '),manija);
fuente.setMaterial();
fuente.setMarca(readlineSync.question('Ingrese la marca que desea modificar '));
let matBase: string = fuente.getMaterialBase();
console.log('El MATERIAL BASE de la FUENTE es ', matBase);
console.log('La FUENTE es ', fuente);