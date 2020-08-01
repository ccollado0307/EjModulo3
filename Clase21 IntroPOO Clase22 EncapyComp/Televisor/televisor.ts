class TV {
    private estaPrendido: boolean
    private volumenActual: number
    private canalActual: number

    constructor(volumenInicial: number, canalInicial: number) {
        this.volumenActual = volumenInicial;
        this.canalActual = canalInicial;
        this.estaPrendido = false;
    }

    prenderApagar(): void {
        if (this.estaPrendido)
            this.estaPrendido = false;
        else
            this.estaPrendido = true;
    }
    subirVolumen(): void {
        this.volumenActual = this.volumenActual + 1
    }
    bajarVolumen(): void {
        this.volumenActual = this.volumenActual - 1
    }
    subirCanal(): void {
        this.canalActual = this.canalActual + 1
    }
    bajarCanal(): void {
        this.canalActual = this.canalActual - 1
    }
    elegirCanal(canal: number): void {
        this.canalActual = canal;
    }
}

let volumen: number = 10;
let canal: number = 24;
let miTV = new TV(volumen, canal);

console.log(miTV);
 
miTV.prenderApagar();
miTV.elegirCanal(3);

console.log(miTV);