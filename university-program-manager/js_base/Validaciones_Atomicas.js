
class validacionesatomicas{

    constructor(){

    }

    static nulo(id){
        if (document.getElementById(id).value.length == 0){
            return false;
        }
        else{
            return true;
        }
    }

    static size_minimo(id, valorminimo){
        if (document.getElementById(id).value.length < valorminimo){
            return false;
        }
        else{
            return true;
        }
    }

    static size_maximo(id, valormaximo){
        if (document.getElementById(id).value.length > valormaximo){
            return false;
        }
        else{
            return true;
        }
    }

    static size_igual(id, valor){
        if (document.getElementById(id).value.length != valor){
            return false;
        }
        else{
            return true;
        }
    }
    
    // Función que comprueba el formato de los campos (que los campos no contengan caracteres incorrectos)
    static formato(id, expresionRegular) {
        const inputElement = document.getElementById(id);
        const valor = inputElement.value;   

        // Verificar si el campo contiene solo caracteres permitidos por la expresión regular
        if (new RegExp(`^[${expresionRegular}]*$`).test(valor)) {
          return true; // Si el campo contiene solo caracteres permitidos, retornamos true.
        } else {
          return false; // Si se encuentra al menos un carácter no permitido, retornamos false.
        }

    }

    // Funcion similar a la anterior pero que permite comprobar caracteres especiales como retornos de carro, comillas o paréntesis
    static formato2(id, expresionRegular) {
        const inputElement = document.getElementById(id);
        const valor = inputElement.value;   

        // Verificar si el campo contiene solo caracteres permitidos por la expresión regular
        if (new RegExp(expresionRegular).test(valor)) {
          return true; // Si el campo contiene solo caracteres permitidos, retornamos true.
        } else {
          return false; // Si se encuentra al menos un carácter no permitido, retornamos false.
        }

    }


    // Función que comprueba los campos a seleccionar (enums)
    static valores_enum(id, valoresPosibles){
      const inputElement = document.getElementById(id);
      const valor = inputElement.value;

      if (valoresPosibles.includes(valor)) {
        return true; // Si el valor coincide, retornamos true.
      } else {
        return false; // Si el valor no coincide, retornamos false.
      }

    }

    static anoNoSuperiorActual(id) {
        var fechaSeleccionada = document.getElementById(id).value;
        const anoActual = 2023;

        if (fechaSeleccionada > anoActual) {
            return false;
        } else {
            return true;
        }
    }
    
    /*
    // Función que comprueba que el año introducido en una fecha no supera al año actual
    static anoNoSuperiorActual(id) {
        var fechaSeleccionada = new Date(document.getElementById(id).value);
        const anoActual = 2023;

        if (fechaSeleccionada.getFullYear() > anoActual) {
            return false;
        } else {
            return true;
        }
    }
    */

}