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
    const nombre = leerValorDeNombre();
    console.log(nombre);
 }
 