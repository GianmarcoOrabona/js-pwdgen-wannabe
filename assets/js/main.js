// Chiedo il nome all'utente
let userName = prompt('Qual è il tuo nome?');
console.log(userName);

// Chiedo all'utente il suo cognome
let userLastName = prompt('Qual è il tuo cognome?');
console.log(userLastName);

// Chiedo all'utente il suo colore preferito
let userFavoriteColor = prompt('Qual è il tuo colore preferito?');
console.log(userFavoriteColor);

// Chiedo all'utente un numero
let userNumber = Number(prompt('Inserisci un numero'));
console.log(userNumber);

// Chiedo all'utente un secondo numero
let secondUserNumber = Number(prompt('Inserisci un secondo numero'));
console.log(userNumber);

// Divido i numeri scelti arrotondando il risultato
let dividedNumber = userNumber / secondUserNumber;
console.log(Math.round(dividedNumber));

// Stampo in console la password ottenuta
console.log(`Ecco la tua password: ${userName}${userLastName}${userFavoriteColor}${Math.round(dividedNumber)}`);