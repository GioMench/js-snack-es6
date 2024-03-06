/*
SNACK 5
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare in console la bici con peso minore utilizzando destructuring e template literal
*/

const bikes = [
    {
        name: 'bici 1',
        weight: 10
    },
    {
        name: 'bici 2',
        weight: 15
    },
    {
        name: 'bici 3',
        weight: 11
    },
    {
        name: 'bici 4',
        weight: 20
    },
    {
        name: 'bici 5',
        weight: 19
    },
    {
        name: 'bici 6',
        weight: 8
    },
    {
        name: 'bici 7',
        weight: 17
    }
];

const bikesweight = bikes.map(bike => bike = bike.weight);
console.log(bikesweight);

let theLighter = Math.min(...bikesweight); // [1,2,3]
console.log(theLighter);

// bikes. trovare a che indece e' il peso minore let indice ... bikes[indice]






let lighterPeso = bikes[0].weight; // assegno il peso della prima bici alla mia variabile che poi utilizzero per fare confronto
let lighterNome; // sara il nome della bici meno pesante
bikes.forEach(bike => {
    /*let weight = bike.weight, 
    name = bike.name;*/
    let { name, weight } = bike;

    if (weight < lighterPeso) {
        lighterPeso = weight;
        lighterNome = name;
    }
});

console.log(`La bici che pesa di meno (${lighterPeso}kg) e' ${lighterNome}`);

