export class Figura {
    protected color: string ;

    public constructor(color:string) {
        this.color = color;
    }

    public calcularPerimetro(): number {
        return 0;
    }

    public calcularArea(): number {
        return 0;
    }

    public secColor(color:string) {
        this.color = color;
    }

    public getColor(): string {
        return this.color;
    }
}