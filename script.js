import{
    barcelona,
    roma,
    paris,
    londres
} from "./ciudades.js" 

let enalaces = document.querySelectorAll("a");
let tituloElemento = document.getElementById("titulo");
let precioElemento =document.getElementById("precio");
let subTituloElemento = document.getElementById("subtitulo");
let parrafoElemento = document.getElementById("parrafo");

console.log(enalaces);

enalaces.forEach(function(enlace){
    enlace.addEventListener('click',function(){
        enalaces.forEach(function(enlace){
            enlace.classList.remove('active');
        });
        
   

    this.classList.add('active');

    let contenido = obtenerContenido(this.textContent);
    console.log(this.textContent);
    tituloElemento.innerHTML = contenido.titulo;
    precioElemento.innerHTML = `Precio: ${contenido.precio}`;
    subTituloElemento.innerHTML = contenido.subtitulo;
    parrafoElemento.innerHTML = contenido.parrafo;

});
});


function obtenerContenido(enlace){
    let contenido={
        'Barcelona':barcelona,
        'Roma':roma,
        'París':paris,
        'Londres':londres
    };
    return contenido[enlace];

}