//`${}`
console.log("test");

/*
Crea un array composto da 10 automobili.
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).
Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
Infine stampa separatamente i 3 array
*/

const cars = [

    {
        marca: 'opel',

        modello: 'corsa',

        alimentazione: 'benzina'
    }
    ,

    {
        marca: 'opel',

        modello: 'corsa',

        alimentazione: 'diesel'
    }
    ,

    {
        marca: 'tesla',

        modello: 'x',

        alimentazione: 'elettrico'
    }
    ,

    {
        marca: 'ford',

        modello: 'focus',

        alimentazione: 'gpl'
    }
    ,

    {
        marca: 'jeep',

        modello: 'whangler',

        alimentazione: 'benzina'
    }
    ,

    {
        marca: 'jeep',

        modello: 'renegade',

        alimentazione: 'metano'
    }
    ,

    {
        marca: 'fiat',

        modello: 'panda',

        alimentazione: 'elettrico'
    }
    ,

    {
        marca: 'fiat',

        modello: '500',

        alimentazione: 'diesel'
    }
    ,

    {
        marca: 'honda',

        modello: 'civic',

        alimentazione: 'benzina'
    }
    ,

    {
        marca: 'ford',

        modello: 'fiesta',

        alimentazione: 'gpl'
    }



]

console.log(cars);

cars.forEach(car => {
    console.log(car.alimentazione);

    cars.filter(carBenzina);

    function carBenzina() {
        return car.alimentazione === 'benzina';
    }

    console.log(carBenzina());


});



//correzione
const petrolCars = cars.filter(car => car.alimentazione === 'benzina');
console.log(petrolCars);

const dieselCars = cars.filter(car => car.alimentazione === 'diesel');
console.log(dieselCars);

const ecoCars = cars.filter(car => car.alimentazione != 'benzina' && car.alimentazione != 'diesel');
console.log(ecoCars);


/*
A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola.
Es: [‘pippo’, ‘PLUTO’, ‘Paperino’] => [‘Pippo’, ‘Pluto’, ‘Paperino’]
*/

const myArray = ['carlo', 'Francesco', 'paola', 'ELISA',];

myArray.forEach(element => {

    const mySecondArray = element.charAt(0).toUpperCase() + element.toLowerCase().slice(1);
    console.log(mySecondArray);
    
});


//correzione

const mySecondArray = myArray.map(element => element.charAt(0).toUpperCase() + element.toLowerCase().slice(1));

console.log(mySecondArray);

























