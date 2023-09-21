
let conta = 0;
let suma = 0;
let num ;

while ( num !=0 ) {
    conta = conta + 1;
    num = +prompt("Ingrese un numero:");
    suma = suma + num ;
}
conta = conta - 1;
console.log(`El promedio es ${suma/conta}`);

