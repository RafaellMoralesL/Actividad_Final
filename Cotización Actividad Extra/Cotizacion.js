///parseInt()

///text.toUpperCase()

var cotizacion = prompt("Usted entró al área de cotización de TK-U, para salir de la cotización escriba salir");
while("salir" != cotizacion.toLowerCase()){

var preciobase = 2000;
var edad1 = 0.1;
var edad2 = 0.2;
var edad3 = 0.3;

var edad4 = 0.1;
var edad5 = 0.2;
var edad6 = 0.3;

var recargo_hijos = 0.2;
var recargo_propiedades = 0.35;
var recargo_ingresos = 0.05;

var recargo = 0;
var recargo_conyuge = 0;
var recargo_ingresos_total = 0;
var recargo_propiedad_total = 0;
var recargo_hijos_total = 0;
var recargo_total = 0;

var precio_final = 0; 
  
var nombre = prompt("Introduzca su nombre por favor");

var edad = parseInt(prompt("Introduzca Su Edad"));

if(edad < 18){
  alert("Solo se realizan contizaciones a personas mayores de 18 años, disculpe los inconvenientes")
continue;
   }
else{
  alert("Usted cumple las condiciones, proceda");
}
  
var casado = prompt("¿Es Usted Casado? ", "Si/No")
var edad_conyuge = null;
if("SI" == casado.toUpperCase()){
  edad_conyuge = parseInt(prompt("¿Qué edad tiene su Esposo/a?"))
}
var hijos = prompt("¿Usted tine hijos? ", "Si/No")
var cantidad_hijos = 0;
if("SI" == hijos.toUpperCase()){
  cantidad_hijos = parseInt(prompt("¿Cuántos hijos tiene?"))
}
var propiedades = prompt("¿Usted posee propiedades? ", "Si/No")
var cantidad_propiedades = 0;
if("SI" == propiedades.toUpperCase()){
  cantidad_propiedades = parseInt(prompt("¿Cuántas propiedades tiene?"))
}
var ingresos = parseInt(prompt("Escriba su cantidad de sus ingresos"))

    if(edad >= 18 && edad <= 24){
      recargo = preciobase * edad1;}
  else if(edad >= 25 && edad <=49){
    recargo = preciobase * edad2;
  }
  else if(edad >= 50){
    recargo = preciobase * edad3
  }
   


if(edad_conyuge != null) {
  if (edad_conyuge >= 18 && edad_conyuge <= 24) {
    recargo_conyuge = preciobase * edad4
  }
    else if (edad_conyuge >= 25 && edad_conyuge <=49) {
      recargo_conyuge = preciobase * edad5
    }
      else if(edad_conyuge >=50) {
      recargo_conyuge = preciobase * edad6
    }
}
 recargo_hijos_total = preciobase * (cantidad_hijos * recargo_hijos);
 recargo_propiedad_total = preciobase * (cantidad_propiedades * recargo_propiedades);
 recargo_ingresos_total = recargo_ingresos * ingresos;
 
 recargo_total = recargo_hijos_total + recargo_propiedad_total + recargo_ingresos_total + recargo + recargo_conyuge;
 
 precio_final = preciobase + recargo_total
 
 alert("Para el asegurado " + nombre)
 alert("El recargo total será de: Q" + recargo_total)
 alert("El precio final será de: Q" + precio_final)
      
cotizacion = prompt("Usted entró al área de cotización de TK-U, para salir de la cotización, introduzca 'salir'");
}

alert("Gracias Por usar Nuestro Servicio de Cotización")



