console.log("Conteo de vocales");

/**
 Encuentra el número de letras que existen en el
 nombre
 @letra {string} letra a buscar
 @nombre {string} nombre a buscar la letra
 return número de letras encontradas
*/

function encontrarNumeroDeLetra( letra, nombre ) {    
    let numeroDeLetras = 0;
    for(let index = 0; index < nombre.length; index++ ) {
        let letraAEvaluar = nombre.charAt( index );
        if( letraAEvaluar === letra){
            numeroDeLetras++;
        }
    }
    return numeroDeLetras;
}

 function leerValorDeNombre(){
    const inputNombre = document.getElementById("nombre");
    return inputNombre.value;
 }


 function manejoDelEventoDeInputNombre(){
    const nombre = leerValorDeNombre().toUpperCase();

    // contar vocales
    const numLetraA = encontrarNumeroDeLetra ("A", nombre);
    const numLetraE = encontrarNumeroDeLetra ("E", nombre);
    const numLetraI = encontrarNumeroDeLetra ("I", nombre);
    const numLetraO = encontrarNumeroDeLetra ("O", nombre);
    const numLetraU = encontrarNumeroDeLetra ("U", nombre);

    // Concatenar todos los resultados en un solo string
    let resultado = nombre + " tiene: <br>";
    resultado += numLetraA + " letras A<br>";
    resultado += numLetraE + " letras E<br>";
    resultado += numLetraI + " letras I<br>";
    resultado += numLetraO + " letras O<br>";
    resultado += numLetraU + " letras U<br>";

    // Imprimir el resultado final
    imprimirResultado(resultado);
}

 function imprimirResultado( resultado ){
    const paragraph = document.getElementById("vocales");
    paragraph.innerHTML = resultado;
}

