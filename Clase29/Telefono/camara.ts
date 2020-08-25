export class Camara {
    private pixels: string;

    public constructor() {
        this.pixels = '20px';
    };

    public sacarFoto (): void {
        console.log('Saco una FOTO');
    }

    public getPixels(): string {
        return this.pixels;
    }

    public modifPixeles(pixels: string) {
        this.pixels = pixels;
    }
}