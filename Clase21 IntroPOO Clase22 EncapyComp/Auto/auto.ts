class Auto {
    private estaEncendido: boolean;
    private marca: String ;
    private modelo: number;
    private color: String;
    private velocidadMaxima: number ;

    public constructor(marca: String, modelo: number, color: String, velocidadMaxima?: number) {
        this.estaEncendido = false;
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;

        if (velocidadMaxima == undefined) 
            this.velocidadMaxima = 0;
        else
            this.velocidadMaxima = velocidadMaxima;
        
    }

    public setEstaEnc (estaEnc: boolean) {
        this.estaEncendido = estaEnc;
    }

    public setMarca (marcaAuto: String ): void {
        this.marca = marcaAuto;
    }

    public setModelo (modeloAuto: number ): void {
        this.modelo = modeloAuto;
    }
    
    public setColor (colorAuto: String ): void {
        this.color = colorAuto;
    }

    public setVelocidadMaxima(velocidadMaxima: number): void {
        this.velocidadMaxima = velocidadMaxima;
     }
}

let miAuto = new Auto('TOYOTA', 2016 , 'BLANCO');

console.log(miAuto);

miAuto.setEstaEnc(true);
miAuto.setMarca('FORD');
miAuto.setModelo(2020);
miAuto.setColor('GRIS NOCHE');
miAuto.setVelocidadMaxima(140);

console.log(miAuto);