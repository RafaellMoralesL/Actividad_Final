///parseInt()

///text.toUpperCase()

var cotizacion = prompt("Usted entró al área de cotización de TK-U, para salir de la cotización");
while("salir" != cotizacion.toLowerCase()){

var preciobase = parseInt(2000);
var edad1 = 0.1;
var edad2 = 0.2;
var edad3 = 0.3;

var edad4 = 0.1;
var edad5 = 0.2;
var edad6 = 0.3;

var recargo_hijos = 0.2;
var recargo_propiedades = 0.35
var recargo_ingresos = 0.05



var recargo = 0;
var recargo_conyuge = 0;
var recargo_ing = 0;
var recargo_prop = 0;
var recargo_hjo = 0;
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
var edad_conyuge
if("SI" == casado.toUpperCase()){
  edad_conyuge = parseInt(prompt("¿Qué edad tiene su Esposo/a?"))
}
var hijos = prompt("¿Usted tine hijos? ", "Si/No")
var cantidad_hijos
if("SI" == hijos.toUpperCase()){
  cantidad_hijos = parseInt(prompt("¿Cuántos hijos tiene?"))
}
var propiedades = prompt("¿Usted posee propiedades? ", "Si/No")
var cantidad_propiedades
if("SI" == propiedades.toUpperCase()){
  cantidad_propiedades = parseInt(prompt("¿Cuántas propiedades tiene?"))
}
var ingresos = parseInt(prompt("Escriba su cantidad de sus ingresos"))

switch(edad){
  case 1:
    if(edad >= 18 && edad <= 24){
      recargo = preciobase * edad1
      break;
    }
  case 2:
    if(edad >= 25 && edad <=49){
      recargo = preciobase * edad2
      break;
    }
  case 3:
    if(edad >=50){
      recargo = preciobase * edad3
    }
}
switch(edad_conyuge){
  case 4:
     if(edad_conyuge >= 18 && edad <= 24){
      recargo_conyuge = preciobase * edad4
      break;
    }
  case 2:
    if(edad_conyuge >= 25 && edad <=49){
      recargo_conyuge = preciobase * edad5
      break;
    }
  case 3:
    if(edad_conyuge >=50){
      recargo_conyuge = preciobase * edad6
    }
}
 recargo_hijos = preciobase * (cantidad_hijos * recargo_hijos)
 recargo_propiedades = preciobase * (cantidad_propiedades * recargo_propiedades)
 recargo_ingresos = preciobase * ingresos
 
 recargo_total = recargo_hijos + recargo_propiedades + recargo_ingreso + recargo + recargo_conyuge;
 
 precio_final = precio_base + recargo_total
 
 alert("Para el asegurado " + nombre)
 alert("El recargo total será de: " + recargo_total)
 alert("El precio final será de: " + precio_final)
      




cotizacion = prompt("Usted entró al área de cotización de TK-U, para salir de la cotización, introduzca 'salir'");
}

alert("Gracias Por usar Nuestro Servicio de Cotización")