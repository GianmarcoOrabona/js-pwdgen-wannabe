// Chiedo il nome all'utente
let userName = prompt('Qual è il tuo nome?');

// Chiedo all'utente il suo cognome
let userLastName = prompt('Qual è il tuo cognome?');

// Chiedo all'utente il suo colore preferito
let userFavoriteColor = prompt('Qual è il tuo colore preferito?');

// Chiedo all'utente un numero
let userNumber = Number(prompt('Inserisci un numero'));

// Chiedo all'utente un secondo numero
let secondUserNumber = Number(prompt('Inserisci un secondo numero'));

// Divido i numeri scelti arrotondando il risultato
let dividedNumber = userNumber / secondUserNumber;

// Salvo la password ottenuta
let password = userName + userLastName + userFavoriteColor;

// Stampo in console le password ottenute
console.log('Ecco la tua prima password: ' + password + '21');
console.log('Ecco la tua prima password: ' + password + Math.round(dividedNumber));
console.log('Ecco la tua prima password: ' + password + Math.floor(Math.random() * 101));

// Stampo le password ottenute nel markup
document.getElementById('first-password').innerHTML = password + '21';
document.getElementById('second-password').innerHTML = password + Math.round(dividedNumber);
document.getElementById('third-password').innerHTML = password + Math.floor(Math.random() * 101);