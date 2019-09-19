function muestraMenu() {
    console.log("----------------------------------------------");
    console.log("1. INGRESAR ELEMENTO EN ARREGLO");
    console.log("2. ELIMINAR UN ELEMENTO EN EL ARREGLO (null)");
    console.log("3. EDITAR UN ELEMENTO EN EL ARREGLO");
    console.log("4. BUSCAR ELEMENTO");
    console.log("5. IMPRIMIR DADO UN INDICE");
    console.log("6. IMPRIMIR TODO EL ARREGLO");
    console.log("7. IMPRIMIR SUMA y PROMEDIO");
    console.log("8. SALIR");
    console.log("----------------------------------------------");

}
let entrada = require("readline-sync");
let arreglo = require("./operaciones");
while (true) {
    muestraMenu();
    var opcion = entrada.questionInt("SELECCIONE UNA OPCION [1 - 8]: ", { limitMessage: 'ERROR: Seleccione una opcion valida [1 - 8].' });
    if (opcion > 0 && opcion < 9) {
        switch (opcion) {
            case 1: {
                var numero = entrada.questionFloat("Ingrese un numero para insertar: ", { limitMessage: 'ERROR: Ingrese un numero por favor.' });
                arreglo.inserta(numero);
                console.log("Listo!. Se insertó el número " + numero + " .");
            }
                break;
            case 2: {
                if (!arreglo.estaVacio()) {
                    try {
                        var indice = entrada.questionInt("Ingrese la posición del elemento a eliminar: ", { limitMessage: 'ERROR: Ingrese un numero entero por favor.' });
                        arreglo.elimina(indice);
                        console.log("Listo!. Se eliminó elemento en la posición " + indice + " .");
                    } catch (error) {
                        console.log(error);
                    }
                }
                else
                    console.log("ERROR: El arreglo no tiene elementos para eliminar.");
            }
                break;
            case 3: {
                if (!arreglo.estaVacio()) {
                    try {
                        var indice = entrada.questionInt("Ingrese la posición del elemento a editar: ", { limitMessage: 'ERROR: Ingrese un numero entero por favor.' });
                        var valor = entrada.questionFloat("Ingrese el nuevo valor: ", { limitMessage: 'ERROR: Ingrese un numero por favor.' });
                        arreglo.edita(indice, valor);
                        console.log("Listo!. Se editó el elemento en la posición " + indice + " .");
                    } catch (error) {
                        console.log(error);
                    }
                }
                else
                    console.log("ERROR: El arreglo no tiene elementos para editar.");
            }
                break;
            case 4: {
                if (!arreglo.estaVacio()) {
                    var valor = entrada.questionFloat("Ingrese el elemento a buscar: ", { limitMessage: 'ERROR: Ingrese un numero por favor.' });
                    var posicion = arreglo.buscaPorValor(valor);
                    if (posicion >= 0) {
                        console.log("Elemento " + valor + " encontrado en la posicion " + posicion + " .");
                    }
                    else
                        console.log("No se encontró el elemento " + valor + " en el arreglo.");
                }
                else
                    console.log("ERROR: El arreglo no tiene elementos.");
            }
                break;
            case 5: {
                if (!arreglo.estaVacio()) {
                    var indice = entrada.questionInt("Ingrese la posición del elemento a buscar: ", { limitMessage: 'ERROR: Ingrese un numero entero por favor.' });
                    try {
                        var valor = arreglo.buscaPorIndice(indice);
                        if (valor !== null) {
                            console.log("El elemento en la posicion " + indice + " es " + valor + " .");
                            while (true) {
                                var respuesta = entrada.question("¿Desea escribir los datos en un archivo de texto? [S/N]: ");
                                if (respuesta === 'S') {
                                    arreglo.buscaPorIndice(indice, true);
                                    console.log("Listo!. Datos guardados en el archivo 'datos.txt.'.");
                                    break;
                                } else
                                    if (respuesta === 'N')
                                        break;
                            }
                        }
                        else
                            console.log("No se encontró ningún elemento en la posición" + posición + " .");
                    } catch (error) {
                        console.log(error);
                    }
                }
                else
                    console.log("ERROR: El arreglo no tiene elementos.");
            }
                break;
            case 6: {
                
                    try {
                        arreglo.imprime();
                        while (true) {
                            var respuesta = entrada.question("¿Desea escribir los datos en un archivo de texto? [S/N]: ");
                            if (respuesta === 'S') {
                                arreglo.imprime(true);
                                console.log("Listo!. Datos guardados en el archivo 'datos.txt.'.");
                                break;
                            } else
                                if (respuesta === 'N')
                                    break;
                        }
                    } catch (error) {
                        console.log(error);
                    }

                
            }
            break;
            case 7: {
                try {
                    arreglo.sumaPromedio();
                    while (true) {
                        var respuesta = entrada.question("¿Desea escribir los datos en un archivo de texto? [S/N]: ");
                        if (respuesta === 'S') {
                            arreglo.sumaPromedio(true);
                            console.log("Listo!. Datos guardados en el archivo 'datos.txt.'.");
                            break;
                        } else
                            if (respuesta === 'N')
                                break;
                    }
                } catch (error) {
                    console.log(error);
                }
            }
            break;
            case 8: return;
        }
        entrada.question("Presione ENTER para continuar...");
    }
    else
        console.log("ERROR: Ingrese un numero valido [1-8].");
}