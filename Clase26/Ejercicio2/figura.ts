export class Figura {
    protected cantLados: number;
    private color: string ;

    public constructor(color: string) {
        this.cantLados = 0;
        this.color = color;
    }

    public setColor(color: string) {
        this.color = color;
    }

    public getColor(): string {
        return this.color;
    }

    public indicarCantLados(): void {
        this.cantLados = 1;
    }

    public getCantLados(): number {
        return this.cantLados;
    }
}