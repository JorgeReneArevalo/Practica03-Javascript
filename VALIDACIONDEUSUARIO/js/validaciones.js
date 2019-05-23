function validarCamposObligatorios() {
    var bandera = true
    for (var i = 0; i < document.forms[0].elements.length; i++) {
        var elemento = document.forms[0].elements[i]
        if (elemento.value == '' && elemento.type == 'text') {
            //alert('Meta bien el dedo!')
            //bandera = false
            if (elemento.id == 'cedula') {
                document.getElementById('mensajeCedula').innerHTML = '<br> La cedula esta vacia <br>'
            }
            if (elemento.id == 'nombres') {
                document.getElementById('mensajeNombre').innerHTML = '<br> El nombre esta vacio <br>'
            }
            if (elemento.id == 'apellidos') {
                document.getElementById('mensajeApellido').innerHTML = '<br> El apellido esta vacio <br>'
            }
            if (elemento.id == 'direccion') {
                document.getElementById('mensajeDireccion').innerHTML = '<br> La direccion esta vacio <br>'
            }
            if (elemento.id == 'telefono') {
                document.getElementById('mensajeTelefono').innerHTML = '<br> El telefono esta vacio <br>'
            }
            if (elemento.id == 'correo') {
                document.getElementById('mensajeCorreo').innerHTML = '<br> El correo esta vacio <br>'
            }
            if (elemento.id == 'contraseña') {
                document.getElementById('mensajeContraseña').innerHTML = '<br> La contraseña esta vacio <br>'
            }
            if (elemento.id == 'fechaNacimiento') {
                document.getElementById('mensajeFechaN').innerHTML = '<br> La fecha de nacimieto esta vacio <br>'
            }
        }
        elemento.style.border = '1px red solid'
        elemento.className = 'error'
        bandera = false

    }
    if (!bandera) {
        alert('Ahora si mete bien el dedo')
    }
    return bandera
}


//function validarLetras(elemento) {
    //if (elemento.value.length > 0) {
        //var miAscii = elemento.value.charCodeAt(elemento.value.length - 1)
        //console.log(miAscii)

    //}
//}


function validarLetras(n){  
    alert(n)
    var numeros = "0123456789"
    var letras = document.getElementById(n).value 
    var cadena 
   if(n== "nombres"){  
      cadena = letras.substring(letras.length-1)
      if(numeros.indexOf(cadena,0)!=-1){  
         var bien = letras.substring(0,letras.length-1); 
         document.getElementById('nombres').value= bien
      }
    }else if (n== "apellidos"){  
        cadena = letras.substring(letras.length-1) 
        if(numeros.indexOf(cadena,0)!=-1){  
            var bien2 = letras.substring(0,letras.length-1); 
            document.getElementById('apellidos').value= bien2
         }
    }
} 

function ValidacionDeCedula() {
    var cedula = document.getElementById('cedula').value.trim();
    var longitud = cedula.length
    if (longitud < 10 || longitud > 10) {
        for (var i = 0; i < document.forms[0].elements.length; i++) {
            var elemento = document.forms[0].elements[i]
            if (elemento.id == 'cedula') {
                document.getElementById('mensajeCedula').innerHTML = "La cedula debe de tener 10 digitos <br>";
                elemento.style.border = '1px red solid'
            }
        }
    } else {
        var total = 0;
        var longcheck = longitud - 1;

        if (cedula !== '' && longitud === 10) {
            for (i = 0; i < longcheck; i++) {
                if (i % 2 === 0) {
                    var aux = cedula.charAt(i) * 2;
                    if (aux > 9) aux -= 9;
                    total += aux;
                } else {
                    total += parseInt(cedula.charAt(i));
                }
            }

            total = total % 10 ? 10 - total % 10 : 0;

            if (cedula.charAt(longitud - 1) == total) {
                document.getElementById('mensajeCedula').innerHTML = ("Cedula Válida <br>");
            } else {
                for (var i = 0; i < document.forms[0].elements.length; i++) {
                    var elemento = document.forms[0].elements[i]
                    if (elemento.id == 'cedula') {
                        document.getElementById('mensajeCedula').innerHTML = ("<br> Cedula Inválida <br>");
                        elemento.style.border = '1px red solid'
                    }
                }
            }
        }
    }
}  

function validarNumeros(l){ 
    var letras = "abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ"
    var numeros = document.getElementById(l).value 
    var cadena 
    cadena = numeros.substring(numeros.length-1)
    if(letras.indexOf(cadena,0)!=-1){  
      var bien = numeros.substring(0,numeros.length-1); 
      document.getElementById(l).value= bien
    }
   
 } 

 function validarCorreo(){ 
    var correo = document.getElementById("correo").value; 
    var val = correo.substring(correo.length-15)  
    var val2 = correo.substring(correo.length-11)
    if(val != "@est.ups.edu.ec" && val2 != "@est.ups.ec" ){ 
        for(var i = 0; i < document.forms[0].elements.length; i++){ 
            var elemento = document.forms[0].elements[i] 
            if(elemento.id == 'correo'){  
            document.getElementById('mensajeCorreo').innerHTML = ("Correo Incorrecto <br>"); 
            elemento.style.border = '1px red solid'
            }  
        }
    }
}

function valFecha(datos) {
    var fecha = document.getElementById(datos.id).value
    if (fecha.length == 10 && fecha !== '') {
        var dia = fecha.substr(0, 2)
        var mes = fecha.substr(3, 2)
        var año = fecha.substr(6, 4)
        var s1 = fecha.substr(2, 1)
        var s2 = fecha.substr(5, 1)
        var val1 = false
        var val2 = false
        var val3 = false
        var val4 = false
        var vals = false
        añov = parseInt(año)
        diav = parseInt(dia)

        if (mes == '01' || mes == '03' || mes == '05' || mes == '07' || mes == '08' || mes == '10' || mes == '12') {
            diav = parseInt(dia)
            if (diav >= 1 && diav <= 31) {
                val1 = true;
            }
        } else if (mes == '02') {
            if (añov % 4 == 0) {
                if (diav >= 1 && diav <= 29) {
                    val2 = true;
                }
            } else {
                if (diav >= 1 && diav <= 28) {
                    val3 = true;
                }
            }
        } else if (mes == '04' || mes == '06' || mes == '09' || mes == '11') {
            if (diav >= 1 && diav <= 30) {
                val4 = true;
            }
        }
        var fechaActual = new Date();
        var diaActual = fechaActual.getDate()
        var mesActual = fechaActual.getMonth() + 1
        var añoActual = fechaActual.getFullYear()
        if (s1 == '/' && s2 == '/') {
            vals = true
        } else {
            document.getElementById('mensajeFechaNacimiento').innerHTML = '<br> El formato de fecha es incorrecto <br>'
        }
        if (parseInt(año) < añoActual) {
            if ((val1 == true || val2 == true || val3 == true || val4 == true) && vals == true) {
                document.getElementById('mensajeFechaNacimiento').innerHTML = ''
            }
        } else if (parseInt(año) == añoActual) {
            if ((val1 == true || val2 == true || val3 == true || val4 == true) && vals == true && parseInt(mes) <= mesActual && parseInt(dia) <= diaActual) {
                document.getElementById('mensajeFechaNacimiento').innerHTML = ''
            } else {
                if (vals == false) {
                    document.getElementById('mensajeFechaNacimiento').innerHTML = '<br>El formato de fecha es incorrecto <br>'
                } else {
                    document.getElementById('mensajeFechaNacimiento').innerHTML = '<br>La fecha es incorrecta <br>'
                }
            }
        }
        if (val1 == false && val2 == false && val3 == false && val4 == false) {
            document.getElementById('mensajeFechaNacimiento').innerHTML = '<br>La fecha es incorrecta <br>'
        }
    } else {
        document.getElementById('mensajeFechaNacimiento').innerHTML = '<br>La fecha es incorrecta o está vacía <br>'
    }
}
