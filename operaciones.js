var arreglo = [];
var nElementos = 0;
var arch = require("fs");
exports.inserta = (numero) => {
    if (arreglo.length > 0) {
        var indice = arreglo.indexOf(null);
        if (indice >= 0) {
            arreglo[indice] = numero;
            nElementos++;
            return;
        }
    }
    arreglo.push(numero);
    nElementos++;

}
exports.elimina = (indice) => {
    if (indice >= 0 && indice < arreglo.length) {
        if (arreglo[indice] !== null) {
            arreglo[indice] = null;
            nElementos--;
            return;
        }
        throw "ERROR: El elemento en la posición " + indice + " ya es null."

    }
    throw "ERROR: Indice fuera del los límites del arreglo.";
}
exports.edita = (indice, nuevoValor) => {
    if (indice >= 0 && indice < arreglo.length) {
        if (arreglo[indice] !== null) {
            arreglo[indice] = nuevoValor;
            return;
        }
        throw "ERROR: No se puede editar el elemento en la posición " + indice + " porque es null.";

    }
    throw "ERROR: Indice fuera del los límites del arreglo.";
}
exports.buscaPorValor = (valor) => {
    return arreglo.indexOf(valor);
}
exports.buscaPorIndice = (indice, imprimirArchivo) => {

    if (indice >= 0 && indice < arreglo.length) {
        if (imprimirArchivo) {
            try {
                arch.writeFileSync("./datos.txt", "Indice = " + indice + ", elemento = " + arreglo[indice]);
                return;
            }
            catch (error) {
                throw "ERROR: No se pudo escribir en el archivo.";
            }

        }
        return arreglo[indice];
    }
    throw "ERROR: Indice fuera de los limítes del arreglo."
}
exports.imprime = (imprimirArchivo) => {
    if (imprimirArchivo) {
        try {
            var cadena = "[ ";
            arreglo.forEach(function (valor, indice) {
                if (indice > 0)
                    cadena += ", " + valor;
                else
                    cadena += valor;
            });
            cadena = cadena + " ]";
            arch.writeFileSync("./datos.txt", "Arreglo = " + cadena);
            return;
        }
        catch (error) {
            throw "ERROR: No se pudo escribir en el archivo.";
        }

    }
    console.log("--Areglo--");
    console.log(arreglo);
}
exports.sumaPromedio = (imprimirArchivo)=>{
    if (nElementos > 0) {
        var suma = 0;
        arreglo.forEach(function (valor) {
            suma += valor;
        });
        var cadena = "Suma = " + suma + ", Promedio = " + suma / nElementos;
        if (imprimirArchivo) {
            try {
                arch.writeFileSync("./datos.txt", cadena);
                return;
            }
            catch (error) {
                throw "ERROR: No se pudo escribir en el archivo.";
            }

        }
        console.log(cadena);
    }
    else
    throw "ERROR: No existen elementos en el arreglo para realizar las operaciones."
}
exports.estaVacio = () => {
    return nElementos == 0;
}