export class Items {
    private descripcion: string;
    private costoUn: number;

    public constructor (descripcion: string,costoUn: number) {
        this.descripcion = descripcion;
        this.costoUn = costoUn;
    }

    public getDescripcion(): string {
        return this.descripcion;
    }

    public getCostoUn(): number {
        return this.costoUn;
    }
}