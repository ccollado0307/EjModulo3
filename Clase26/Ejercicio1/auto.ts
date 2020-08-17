
export class Auto {
    protected marca: String ;
    private modelo: number;
    protected velocidadActual: number ;

    public constructor() {
        this.marca = 'Ford';
        this.modelo = 2016;
        this.velocidadActual = 0;
    }

    public setMarca (marcaAuto: String ): void {
        this.marca = marcaAuto;
    }

    public setModelo (modeloAuto: number ): void {
        this.modelo = modeloAuto;
    }

    public getMarca() :String {
        return this.marca;
    }

    public getModelo () :Number {
        return this.modelo;
    }

    public acelerar(): void {
        this.velocidadActual += 10;
    }
}