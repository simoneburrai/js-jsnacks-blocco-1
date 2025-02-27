// jsnack2
// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.


// Definizione variabili parole 
const wordOne = prompt("Inserisci una parola");
const wordTwo = prompt("Inserisci una parola");

// Definizione variabili con lunghezza delle parole 
const wordOneLength = wordOne.length;
const wordTwoLength = wordTwo.length;

// Condizione: se una parola è più grande dell'altrà allora 
// stampa prima la parola più piccola
if (wordOneLength > wordTwoLength){
    console.log(wordTwo);
    console.log(wordOne);
}else {
    console.log(wordOne);
    console.log(wordTwo);
}
