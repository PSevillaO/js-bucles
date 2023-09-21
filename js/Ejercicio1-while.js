// solicitamos un numero y mostramos los que son mupliplos de 7
// el log debe ser el siguiente 
// el numero X es mupliplo de 7

const num = +prompt("Ingrese un numero");
let conta = 1;
while (conta <= num) {
    if (conta % 7 == 0) {
        console.log(`El Numero ${conta} es divisible por 7`);
    }
    conta = conta + 1;
}

