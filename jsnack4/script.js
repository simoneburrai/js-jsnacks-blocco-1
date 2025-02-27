// jsnack4
// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari inseriscilo nell’array


// Inizializzazione Array vuoto 
const array = [];
let number;


// Chiedi all'utente di inserire un numero per 6 volte.
// Ogni volta verifica se questo numero è dispari, in tal caso inseriscilo
// all'interno dell'array number 

for (i=0; i<6; i++){
    number = prompt("Inserisci un numero");
    const odd = (number % 2 !== 0);
    if (odd) {
        array.push(number);
    }
}

// Stampa dell'array con tutti i numeri dispari al suo interno 
console.log(array);