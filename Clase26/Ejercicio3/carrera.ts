export class Carrera {
    private titulo: string;
    private finalizado: boolean;

    public constructor(titulo: string, finalizado: boolean) {
        this.titulo = titulo;
        this.finalizado = finalizado;
    }

    public setTitulo(titulo: string): void {
        this.titulo = titulo;
    }

    public getTitulo(): string {
        return this.titulo;
    }

    public setFinalizado(finalizado: boolean): void {
        this.finalizado = finalizado;
    }

    public getFinalizado(): boolean {
        return this.finalizado;
    }
}