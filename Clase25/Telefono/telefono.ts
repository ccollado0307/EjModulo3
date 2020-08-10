class Telefono {
    private estaPrendido: boolean;
    private bateriaActual: number;
    protected linternaPrendida: boolean;

    public constructor() {
        this.estaPrendido = false;
        this.bateriaActual = 100;
        this.linternaPrendida = false;
    }

    public mandarMensaje(mensaje: string, numero: number): void {
        this.estaPrendido = true;
        console.log('Mensaje a Enviar ', mensaje, 'al numero ', numero);
    }

    public hacerLlamada(numTE: number): void {
        this.estaPrendido = true;
        console.log('Llamar al Numero ', numTE);
    }

    public prenderApagar(): void {
        if (this.estaPrendido)
            this.estaPrendido = false;
        else
            this.estaPrendido = true;
    }
}

class Camara {
    private pixels: string;

    public constructor() {
        this.pixels = '20px';
    };

    public sacarFoto (): void {
        console.log('Saco una FOTO');
    }

    public getPixels(): string {
        return this.pixels;
    }

    public modifPixeles(pixels: string) {
        this.pixels = pixels;
    }
}

class TelefonoConCamara extends Telefono {
    private camara: Camara;

    public constructor() {
        super();
        this.camara = new Camara;
    }

    public sacarFoto(): void {
        this.camara.sacarFoto();
    }
}

let telefono:Telefono = new Telefono;
telefono.prenderApagar();
telefono.mandarMensaje('Hola soy un telefono',154604600);
telefono.hacerLlamada(2494123123);

let telefonoConCamara: TelefonoConCamara = new TelefonoConCamara;
telefonoConCamara.prenderApagar();
telefonoConCamara.sacarFoto();
telefonoConCamara.mandarMensaje('Soy un TE', 2494567567 );
console.log('Telefono con Camara ', telefonoConCamara);

let camara: Camara = new Camara;
camara.sacarFoto();
camara.modifPixeles('30px');
console.log(camara.getPixels());