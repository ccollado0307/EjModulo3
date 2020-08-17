export abstract class Vehiculo {
    private marca: string;
    protected velocidadActual: number;
    protected color: string;
    private estaPrendido: boolean;
    
    public constructor(marca:string) {
        this.marca = marca;
        this.velocidadActual = 0;
        this.color = '';
        this.estaPrendido = false;
    }
   
    abstract acelerar(): void;

    abstract setColor(): void;
    
    public prender(): void {
        this.estaPrendido = true;
    }
    public apagar(): void {
        this.estaPrendido = false;
    }

    public setMarca(marca: string) {
        this.marca = marca;
    }

    public getMarca(): string {
        return this.marca;
    }
}