class Telefono {
    private estaPrendido: boolean;
    private bateriaActual: number;

    public constructor() {
        this.estaPrendido = false;
        this.bateriaActual = 100;
    }

    public mandarMensaje(mensaje: string): void {
        this.estaPrendido = true;
        console.log('Mensaje a Enviar ', mensaje);
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

class TelefonoConCamara extends Telefono {
    public constructor() {
        super();
    }
    public sacarFoto(): void {
        console.log('Saque una linda foto');
    }
}

class TelefonoConRadio extends Telefono {
    private frecuenciaActual: number;

    public constructor() {
        super();
        this.frecuenciaActual = 103.9;
    }
    public verFrecuenciaActual(): void {
        console.log('La Frecuencia Actual es ', this.frecuenciaActual);
    }
}

let telefono:Telefono = new Telefono;
telefono.mandarMensaje('Hola soy un telefono');

let telefonoConCamara: TelefonoConCamara = new TelefonoConCamara;
telefonoConCamara.prenderApagar();
console.log('Telefono con Camara ', telefonoConCamara);

let telefonoConFrec: TelefonoConRadio = new TelefonoConRadio;
telefonoConFrec.verFrecuenciaActual();
telefonoConFrec.hacerLlamada(154604600);