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

let theLighter = Math.min(...bikesweight);
console.log(theLighter);


