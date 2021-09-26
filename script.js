let nombreArticulo;
let clave = 0;
let precioOriginal = 0.0;
let Descuento = 0.0;
let precioDescuento = 0.0;

nombreArticulo = prompt('Ingrese el nombre del artículo: ');
precioOriginal = Number(prompt('Ingrese el precio Original del artículo: '));
clave = Number(prompt('Ingrese la clave del artículo: '));

if(clave==01){
    Descuento = precioOriginal*0.10;
    precioDescuento = round(precioOriginal-Descuento);
    alert(`Nombre artículo ${nombreArticulo}
    Clave: 0${clave}
    Precio Original: ${precioOriginal} pesos
    Precio Descuento: ${precioDescuento} pesos`);
}else if(clave==02){
    Descuento = precioOriginal*0.20;
    precioDescuento = round(precioOriginal-Descuento);
    alert(`Nombre artículo ${nombreArticulo}
    Clave: 0${clave}
    Precio Original: ${precioOriginal} pesos
    Precio Descuento: ${precioDescuento} pesos`);
}else {
             alert(`Nombre artículo ${nombreArticulo}
                    Clave: 0${clave}
                    Precio Original: ${precioOriginal} pesos
                    Precio Descuento: ${precioDescuento} pesos
                    El artículo NO tiene descuento. Clave fuera de rango.`);
}
function round(num) {
    let m = Number((Math.abs(num) * 100).toPrecision(15));
    return Math.round(m) / 100 * Math.sign(num);
}