ACTIVIDADES DESARROLLADAS
A partir de los siguientes problemas se pide implementar soluciones basadas en el lenguaje de programación de JavaScript usando funciones y eventos. 

Se pide construir una calculadora en el lenguaje de programación de JavaScript con base a un formulario HTML usando botones y una caja de texto. Además, para que permita realizar operaciones aritméticas de complejidad básica, como: suma, resta, multiplicación, división, raíz cuadrada, entre otros. A continuación, se muestra un ejemplo de las operaciones que debe realizar la calculadora-
 



1.	Para realizar este proyecto utilizamos el software visual studio. Lo primero que vamos a crear es un archivo calculadora.html
 
Luego dentro de archivo calculadora.html vamos a crear la calculadora.
Utilizamos css. Creamos un archivo style.css para dar estilo a nuestra calculadora.
También utilizamos AJAX la cual aquí vamos a crear nuestras funciones para que realice la calculadora.
 
Creamos el diseño de nuestra calculadora de la siguiente manera:
 
El CLASS para dar estilo y relleno según como tengamos nuestro archivo style.css   

1.1	Una vez de haber declarado todos los botones de la calculadora procedemos a crear las funciones en el archivo fun.js
 
1.2	Luego procedemos a crear las funciones. Creamos la primera función para eliminar de la caja de texto.
 
1.3	Luego creamos otra función para poder escribir los números en la caja de texto, aquí debemos hacer que en la pantalla muestro el 0 por default al momento de abrir la calculadora.
 
1.4	Luego creamos para la raíz cuadra. Para hacer la raíz de cuadrada de un numero utilizamos Math.sqrt este me saca la raíz cuadrada. 
 
1.5	Creamos una función para realizar las operaciones. Creamos para la suma, resta, multiplicación y división.    
 
1.6	Luego creamos la función para realizar los cálculos.
 

1.7	También creamos una función para el masmenos la cual este me permitirá poner adelante del numero el signo menos. 

 

RESULTADO(S) OBTENIDO(S):
  
 

2.	Diseñar una interfaz en HTML que permita ingresar los siguientes campos en un formulario: cedula, nombres, apellidos, dirección, teléfono, fecha de nacimiento y correo electrónico. Luego, usando funciones de JavaScript se debe validar que todos los campos han sido ingresados, además; que los valores ingresados en cada campo del formulario sean correctos teniendo en cuenta las siguientes condiciones: 
a. Se debe validar qué, en el campo de la cedula, se ingrese sólo número y que la misma sea correcta, en base, al último dígito verificador. 
b. Se debe validar qué, en el campo del nombres, ingrese únicamente dos nombres y que permita ingresar sólo letras
c. Se debe validar qué, en el campo del apellidos, ingrese únicamente dos apellidos y que permita ingresar sólo letras. 
d. Se debe validar qué, en el campo del teléfono, permita ingresar sólo números. 
e. Se debe validar que la fecha de nacimiento ingrese en el formato dd/mm/yyyy. 
f. Se debe validar qué, en el campo correo electrónico, permita ingresar un correo válido. Se considera un correo válido, cuando comienza por tres o más valores alfanuméricos, luego un @, seguido por la extensión “ups.edu.ec” o “est.ups.edu.ec”.

Indicaciones: 
• Para realizar las validaciones de solo letras, o sólo números. Se las debe realizar en tiempo real, es decir, a medida que el usuario escribe en el campo. 
• Todos los campos de entrada dentro del formulario deben de ser de tipo “text”. 
• Las demás validaciones se realizarán al momento de “enviar” (submit) la información del formulario hacia una página php. Si no cumple las validaciones, se mostrará un mensaje debajo de cada campo con el error y se pintará el campo con un borde rojo que representará que el campo tiene un error. Si se cumple las validaciones, se enviará a una página php, en donde se mostrará únicamente un mensaje que diga “Bienvenido, ¡pasaste las validaciones!”

 
2.1	Creamos un archivo crear_ususario.html.
Ahora damos diseño de un formulario. Todos los campos de entrada dentro del formulario deben de ser de tipo “text”.  
 
2.2	Creamos un archivo style.css y damos estilo al formulario.
 
2.3	Para realizar las validaciones creamos un archivo funcion.js. hacemos varios if para realizar la validación de cada campo. Verificamos si los campos están vacíos y si se cumple llamamos a nuestra variable que tenemos en el crear_ususario.html.
 
2.4	Luego validamos las letras la cual al momento de digitar números en los campos de nombres y apellidos me borre automáticamente.
 
2.5	Creamos una función para validar la cedula. Verificamos que ingrese 10 dígitos de la cedula y luego se comprueba si la cedula es valida o invalida, en caso de que sea invalida me mostrara un mensaje pidiendo que revise la cedula.  
   
2.6	 Creamos una función para validar los números. Aquí el usuario no puede ingresar letras la cual me permitirá ingresar solo números, en caso de que ingrese letras me borrara automáticamente.
 
2.7	 Luego creamos la función fecha para valida el formato que ingrese el usuario la fecha. Igualmente si el usuario ingresa mal la fecha se lanzara un mensaje pidiendo que ingrese bien la fecha 
 
  
RESULTADO(S) OBTENIDO(S):
  
 

 
 
3.	Diseñar una interfaz en html que tenga tres botones que diga “Anterior”, “Iniciar”, “Siguiente”, y una imagen. Luego, desde javascript se debe controlar para al hacer clic sobre uno de los botones realice una acción relacionada a una galería de imágenes (ver ejemplo, https://gihp4c.blog.ups.edu.ec/)
 
Indicaciones:
• Se debe tener, un arreglo con los nombres de diez imágenes, previamente descargadas y almacenadas en una carpeta llamada “images”.
• La galería de imágenes debe visualizar exclusivamente 5 imágenes. 
• Cada vez que se haga clic en el botón iniciar se deben escoger de manera aleatoria cinco imágenes de las diez que se mostrarán en la galería de imágenes.
• Al hacer clic en el botón siguiente y haber llegado a la última imagen disponible, el botón siguiente deberá ser deshabilitado (sólo cuando se ha llegado a la última imagen el botón siguiente deberá estar deshabilitado) 
• Al hacer clic en el botón anterior y haber llegado a la primera imagen disponible, el botón anterior deberá ser deshabilitado (sólo cuando se ha llegado a la última imagen y cuando se
3.1	 Creamos un archivo index.html. luego creamos tres botones ya que esto me permitirá pasar a las siguientes imágenes.
  
3.2	Creamos nuestro archivo función.js para hacer que las imágenes sean aleatorias. Existen tres funciones, una para dar inicio a la imagen, otra para dar siguiente a la imagen y otra para regresar a la imagen.
 
Debemos tener creada una carpeta con imágenes.  
3.3	También creamos un archivo style.css para dar forma a los botones.  

