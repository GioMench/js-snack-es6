/*
Crea un array di oggetti che rappresentano delle persone.
Ogni persona ha un nome, un cognome e un’età.
Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l’indicazione se può guidare, in base all’età.
*/

const personList = [
    {
        nome: 'Giorgia',
        cognome: 'Mancini',
        età: '26'
    }
    ,

    {
        nome: 'Luca',
        cognome: 'Mancini',
        età: '17'
    }
    ,

    {
        nome: 'Andrea',
        cognome: 'Spiga',
        età: '32'
    }
    ,

    {
        nome: 'Patrizia',
        cognome: 'Florio',
        età: '56'
    }
    ,

    {
        nome: 'Lea',
        cognome: 'Aquilino',
        età: '17'
    }
    ,

    {
        nome: 'Giorgia',
        cognome: 'Amerena',
        età: '15'
    }

]


const personDescription = personList.map(person => {
    if (person.età >= 18) {
        return `${person.nome} ${person.cognome} può guidare`;
    }
    return `${person.nome} ${person.cognome} non può guidare`;

})


console.log(personDescription);

//correzione

const personsDescription = personList.map(person => {
    if (person.età >= 18) {
        person.canDrive = `${person.nome} ${person.cognome} può guidare`;

    } else {
        person.canDrive = `${person.nome} ${person.cognome} non può guidare`;
    }

    return person
})


console.log(personsDescription);

