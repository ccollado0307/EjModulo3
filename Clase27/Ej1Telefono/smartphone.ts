import {Telefono} from './telefono';

export class Smartphone implements Telefono {
    private estaPrendido: boolean;

    public constructor() {
        this.estaPrendido = false;
    }

    public prender() {
        this.estaPrendido = !this.estaPrendido;
    }

    public apagar() {
        this.estaPrendido = !this.estaPrendido;
    }

    public llamar(numero: string) {
        if (this.estaPrendido) 
        console.log('Llamar al Numero ', numero);
    else
        console.log('El Telefono esta apagado, no se puede llamar al numero ', numero);
    }

    public sacarFoto() {
        if (this.estaPrendido) 
            console.log('Saco una Foto');
        else
            console.log('El Telefono esta apagado, no se puede sacar una foto');
    }
}