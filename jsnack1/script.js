// #jsnack1
// L’utente inserisce due numeri in successione, con due prompt.
// Il software stampa il maggiore.

// Definizione Variabili inserite dall'utente
const numberOne = prompt("Inserisci un numero");
const numberTwo = prompt("Inserisci un numero");

// Condizione: valuta qual è il numero più grande e stampalo 
if(numberOne > numberTwo) {
    console.log(numberOne);
}else if (numberTwo > numberOne) {
    console.log(numberTwo);
} else {
    console.log("I due numeri sono uguali");
}