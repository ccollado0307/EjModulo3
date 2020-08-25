import {Items} from "./items";
import {GestorDeArchivos} from "./gestorDeArchivos";
import * as fs from 'fs';

export class ControlDeStock {
    private itemsEnStock: Array<Items>;
    private itemsVend: Array<Items>;

    public constructor() {
        this.itemsEnStock = [];
        this.itemsVend = [];
        this.cargarItems();
    }

    private cargarItems() {
        let ubicacion: string = 'itemsEnStock.txt';
        let miArchivo: GestorDeArchivos = new GestorDeArchivos(ubicacion);

        let arreglo: Array<string> = miArchivo.retornarArreglo();
        for (let i: number = 0; i < arreglo.length; i++) {
            let items: Array<string> = arreglo[i].split(',');  
            let itemsNuevo: Items = new Items(items[0],Number(items[1]));
            this.itemsEnStock.push(itemsNuevo);
        }  
    }

    public getItemsEnStock(): Array<Items> {
        return this.itemsEnStock;
    }

    public getItemsVendidos(): Array<Items> {
        return this.itemsVend;
    }

    private buscarItems(descripcion: string): number {
        for (let i:number = 0;i < this.itemsEnStock.length; i++) {
            let item:Items = this.itemsEnStock[i];
            if (item.getDescripcion() == descripcion) {
                return i;
            }
        }
        return -1;
    }

    public vender(item: string): void {
        let ubicacion: number = this.buscarItems(item);
        if (ubicacion != -1) {
            let item = this.itemsEnStock[ubicacion];
            this.itemsEnStock.splice(ubicacion,1);
            this.itemsVend.push(item);
        }
    }

    public comprar(descripcion: string,costoUn: number): void {
        this.itemsEnStock.push(new Items(descripcion,costoUn));
    }

    public ImprimirArchivo():void{
        let texto : string = '';
        for (let index = 0; index < this.itemsVend.length; index++) {
           let vehiculo : Items = this.itemsVend[index]  ;
           let cadena: string[] = new Array();
           cadena = Object.values(vehiculo);
           texto = texto + cadena.toString() + '\r\n';
        }
       fs.writeFile('itemsVendidos.txt',texto,function(err){
           // If an error occurred, show it and return
           if(err) return console.error(err);
           // Successfully wrote to the file!
       }); 
    }
}