// jsnack3
// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

// Inizializzazione variabile numero 
let number = 0;

// Finchè l'indice è minore di 10 chiedi all'utente un numero
// Questo verrà sommato a se stesso per tutte le 10 volte 

for(i=0; i < 10; i++){
    number += Number(prompt("Inserisci un numero"));
}

// Stampa della somma di tutti i numeri 
console.log("La somma di tutti ii numeri inseriti è ", number);