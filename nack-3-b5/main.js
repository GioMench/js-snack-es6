/*
Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC)
*/

/*const myString = "Ciao a tutti!";
const reversedString = myString.split('').reverse().join('');
console.log(reversedString);*/

function theReverseString(theString){
    let theReversed = theString.split('').reverse().join('');
    return theReversed;
}

let myString = 'ciao a tutti!';

theReverseString(myString);

console.log(theReverseString(myString));