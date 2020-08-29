export class Auto {
    private marca: string = '';
    private modelo: number = 0;
    private color: string = ''; 
    private velocidadMaxima: number = 0;
    private tipoCaja: string = '';
    private gasolero: boolean = false;

    public setMarca (marcaAuto: string): void {
        this.marca = marcaAuto;
    }

    public setModelo (modeloAuto: number): void {
        this.modelo = modeloAuto;
    }
    
    public setColor (colorAuto: string): void {
        this.color = colorAuto;
    }

    public setVelocidadMaxima(velocidadMaxima: number): void {
        this.velocidadMaxima = velocidadMaxima;
    }

    public setTipoCaja(tipoCaja: string): void {
        this.tipoCaja = tipoCaja;
    }

    public setGasolero(gasolero: boolean): void {
        this.gasolero = gasolero;
    }
}