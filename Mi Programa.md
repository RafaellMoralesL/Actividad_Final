# Mi Programa
##Funcionamiento
Mi programa crea un bucle para continuar creando cotizaciones del cual se puede salir cuando se escriba la palabra "salir"
dentro del bucle se pregunta al usuario, su nombre, su edad, si está casado y que edad tiene su conyúgue, si tiene hijos y cuantos hijos tiene, si tiene propiedades y cuantas propiedades tiene, y sus ingresos.
Si al colocar en edad algo menor a 18, le avisa al usuario que no puede proceder con la cotización, le agradece y cierra el programa.
Si responde si a alguna pregunta de si está casado, tiene propiedades o tiene hijos, pregunta la cantidad de cada una y la edad de su cónyuge.
Pide al usuario que introduzca la cantidad de ingresos que tiene.
Al finalizar las preguntas, utiliza las mismas respuestas del usuario para calcular cada uno de los recargos.
Con las edades se definen unos rangos para saber que porcentaje utilizar para el cálculo, y si respondió No a alguna pregunta, automáticamente se toma el valor base definido, que es 0, para que no se sumen al precio de todos los recargos ni al total.
Con los demas, multiplica la cantidad que tiene de cada cual por el porcentaje necesario, y luego eso se multiplica por el precio base del cual se toma el recargo.
En caso de los ingresos, el recargo al ser en base a su mismo ingreso, se multiplica por la cantidad ingresada por el usuario.
Suma todos los recargos que apliquen o no apliquen para sacar un total de recargos.
Suma el total de recargos con el precio base del seguro estándar. 
Le devuelve por medio de un mensaje al usuario la cantidad de recargo que se le va a aplicar y el precio final que quedaria con el precio base del seguro.
Pregunta al usuario que escriba salir si desea terminar de usar el programa.
Si no, le vuelve a preguntar todo dentro del bucle hasta que decida que son suficientes cotizaciones y escriba "salir".
Le agradece al usuario por haber utilizado el programa y termina. 


##Puntos a tomar en cuenta
Lo importante del programa es considerar los porcentajes de los recargos para que sean procesados correctamente, ya que normalmente no se puede colocar en %, se colocan con decimales, siendo 10% = 0.1 y así continuamente. Otro punto importante es definir los rangos correctamente, para evitar problemas en el cálculo final. Lo demas seria manterner el orden de las variables y saber los nombres que se le asignan a cada uno, para evitar que el programa tome las variables incorrectas o no sepa que utilizar ya que la variable tiene un nombre distinto. Otro punto importante es que las variables se estén multiplicando y sumando correctamente, ya que puede llevar a montos completamente inimaginables al final del cálculo, así que hay que darse cuenta según la propia lógica si se definieron bien que cosas deben ir con cuales. 

##¿Qué se puede mejorar? 
Honestamente, creo que demasiadas cosas, diria que muchas de mis variables poseen nombres confusos para alguien que no sea yo, y en los prompt mis instrucciones las siento que se van muy para un lado o para el otro, o intentan explicar mucho que se debe colocar, o simplemente deja algo muy implícito, que para alguien con poca experiencia utilizando programas puede llegar a confundir mucho. Otra cosa es las comprobaciones de datos, investigando un poco, encontré que hay formas de que se compruebe lo que el usuario colocó para evitar que por ejemplo, coloque letras en un lugar donde solo se utilizan números. Y ser constante en el código, en algunas funciones dejé mas espacios que en otros, los ; y etc.
Todo esto por nombrar algunas cosas.