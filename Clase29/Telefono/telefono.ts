export class Telefono {
    private estaPrendido: boolean;
    private bateriaActual: number;
    protected linternaPrendida: boolean;

    public constructor() {
        this.estaPrendido = false;
        this.bateriaActual = 100;
        this.linternaPrendida = false;
    }

    public mandarMensaje(mensaje: string, numero: number): boolean {
        this.estaPrendido = true;   
        if (numero == 0)
            throw new Error('No se puede realizar la llamada');

        console.log('Mensaje a Enviar ', mensaje, 'al numero ', numero);
        return true;
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