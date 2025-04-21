// Números:
// 1. Escribe una función que tome dos números como argumentos y devuelva su suma.

function suma(num1, num2) {
    return num1 + num2;
    }

// 2. Escribe una función que tome dos números como argumentos y devuelva su resta.

function restar(num1, num2) {
    return num1 - num2;
    }   
// Vamos a probarla

// 3. Escribe una función que tome dos números como argumentos y devuelva su producto.

function multiplicar(num1, num2) {
    return num1 * num2;
}

// 4. Escribe una función que tome dos números como argumentos y devuelva su división.

function division(dividendo, divisor) {
    if (divisor === 0) {
      return "¡Error! No se puede dividir por cero.";
    } else {
      return dividendo / divisor;
    }
  }

// 5. Escribe una función que tome un número base y un exponente y devuelva el resultado de elevar el número base a la potencia dada.

function elevar(base, exponente) {
    return Math.pow(base, exponente);
}

// Letras:

// 1. Escribe una función que tome dos cadenas de texto como argumentos y devuelva su concatenación.

function concatenacion(cadena1, cadena2) {
    return cadena1 + cadena2;
  }
  
// 2. Escribe una función que tome una cadena de texto como argumento y devuelva su longitud.

function calcularLongitud(texto) {
    return texto.length;
  }  

// 3. Escribe una función que tome una cadena de texto como argumento y devuelva la misma cadena en mayúsculas.

function cambiarMayusculas(texto) {
    return texto.toUpperCase();
  }

// 4. Escribe una función que tome una cadena de texto como argumento y devuelva la misma cadena en minúsculas.

function cambiarMinusculas(texto) {
    return texto.toLowerCase();
  }

// 5. Escribe una función que tome una cadena de texto y un índice como argumentos, y devuelva el carácter en esa posición.

function CaracterPosicion(texto, indice) {
    return texto.charAt(indice);
}

// Arrays

// 1. Escribe una función que tome un array de números como argumento y devuelva la suma de todos sus elementos.

function sumaElementosArray(numeros) {
    let suma = 0;
    for (let a = 0; a < numeros.length; a++) {
      suma += numeros[a];
    }
    return suma;
  }
  
// 2. Escribe una función que tome un array de números como argumento y devuelva el promedio de todos sus elementos.

function PromedioDeElementos(numeros) {
    if (numeros.length === 0) return 0;
  
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
      suma += numeros[i];
    }
  
    return suma / numeros.length;
  }
  
// 3. Escribe una función que tome un array de números como argumento y devuelva el array ordenado de forma ascendente.

function arrayOrdenarAscendente(numeros) {
    numeros.sort(function(a, b) {
      return a - b;
    });
    return numeros;
  }
  
// 4. Escribe una función que tome un array de números y un número como argumentos, y devuelva un nuevo array con los elementos mayores al número dado.

function arrayElementosMayoresQue(numeros, limite) {
    return numeros.filter(function(numero) {
      return numero > limite;
    });
  }
  
// 5. Escribe una función que tome dos arrays como argumentos y devuelva un nuevo array con todos los elementos de ambos arrays.

// voy a usar el operador spread (...)

function arraysUnidos(arr1, arr2) {
    return [...arr1, ...arr2];
  }
  
// Objetos literales

/*Por qué se llama "literal"?
Porque estás escribiendo el valor directamente en el código, sin usar una clase, constructor, o función.*/

// 1. Escribe una función que tome un objeto literal con una propiedad "nombre" y devuelva el valor de esa propiedad.

function obtenerValorDePropiedad(objeto) {
    return objeto.nombre;
  }
  
// 2. Escribe una función que tome un objeto literal con una propiedad "edad" y un número como argumentos, y actualice el valor de la propiedad "edad" con el número dado.

function actualizarValorDeEdad(persona, nuevaEdad) {
    persona.edad = nuevaEdad;
    return persona;
  }
  
// 3. Escribe una función que tome un objeto literal y una cadena de texto como argumentos, y agregue una nueva propiedad al objeto con la cadena de texto como nombre y un valor inicial de null.

function agregarPropiedad(objeto, nombrePropiedad) {
    objeto[nombrePropiedad] = null;
    return objeto;
}
// 4. Escribe una función que tome un objeto literal y una cadena de texto como argumentos, y elimine la propiedad del objeto con el nombre dado.

function eliminarPropiedadDeObjeto(objeto, nombrePropiedad) {
    delete objeto[nombrePropiedad];
    return objeto;
  }
// 5. Escribe una función que tome un objeto literal como argumento y devuelva la cantidad de propiedades que tiene.

function cantidadPropiedades(objeto) {
    return Object.keys(objeto).length;
  }
