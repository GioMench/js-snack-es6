/*
Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
Calcola quanto pesano tutte le zucchine.
*/

const zucchine = [

    {
        type: 'zucchina 1',
        weight: 10,
        long: 20
    },
    {
        type: 'zucchina 2',
        weight: 9,
        long: 17
    },
    {
        type: 'zucchina 3',
        weight: 17,
        long: 26
    },
    {
        type: 'zucchina 4',
        weight: 20,
        long: 24
    },
    {
        type: 'zucchina 5',
        weight: 12,
        long: 26
    },
    {
        type: 'zucchina 6',
        weight: 9,
        long: 13
    },
    {
        type: 'zucchina 7',
        weight: 8,
        long: 7
    },
    {
        type: 'zucchina 8',
        weight: 6,
        long: 8
    },
    {
        type: 'zucchina 9',
        weight: 18,
        long: 20
    },
    {
        type: 'zucchina 10',
        weight: 19,
        long: 23
    },

]

sum = 0;
 zucchine.forEach(zucchina => sum += zucchina.weight)
 console.log(sum);