import {ControlDeStock} from "./controlDeStock"

let cs = new ControlDeStock();
console.log(cs.getItemsEnStock());

//1 agrego un producto. Pido Descripcion Costo Cant.  
//Si no esta...agrego producto
//2 vendo un producto. busco si esta. paso a archivo items vendidos. 
//0 termino

cs.vender('Beldent');

cs.comprar('Beldentttt',1000);

console.log('comprado ',cs.getItemsEnStock());

cs.ImprimirArchivo();