// jsnack4
// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari inseriscilo nell’array

const array = [];
let number;
for (i=0; i<6; i++){
    number = prompt("Inserisci un numero");
    const odd = (number % 2 !== 0);
    if (odd) {
        array.push(number);
    }
}
console.log(array);