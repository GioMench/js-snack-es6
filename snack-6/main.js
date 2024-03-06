/*
SNACK 6*



*/
//Creare un array di oggetti di squadre di calcio.
//Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
//Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
const squads = [
    {
        name: 'squadra 1',
        point: 0,
        fault: 0
    },
    {
        name: 'squadra 2',
        point: 0,
        fault: 0
    },
    {
        name: 'squadra 3',
        point: 0,
        fault: 0
    },
    {
        name: 'squadra 4',
        point: 0,
        fault: 0
    },
    {
        name: 'squadra 5',
        point: 0,
        fault: 0
    },

    {
        name: 'squadra 6',
        point: 0,
        fault: 0
    }
];

//Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.

squads.map(squad => {
 
    squad.point = Math.floor(Math.random() * 10) + 1;
    squad.fault = Math.floor(Math.random() * 10) + 1;
    return squad

})
console.log(squads);

//Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console

const theSquads = squads.map(squad => let { name , fault} = squads)

