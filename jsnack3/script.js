// jsnack3
// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

let number = 0;
for(i=0; i < 10; i++){
    number += Number(prompt("Inserisci un numero"));
}

console.log("La somma di tutti ii numeri inseriti è ", number);