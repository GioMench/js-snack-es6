/*
Crea un array di oggetti che rappresentano degli animali.
Ogni animale ha un nome, una famiglia e una classe.
Crea un nuovo array con la lista dei mammiferi.
*/

const animals = [

{
    nome: 'cavallo' ,
    famiglia: 'equidi', 
    classe: 'mammifero'
}
,

{
    nome: 'cane' ,
    famiglia: 'canidi', 
    classe: 'mammifero'
}
,

{
    nome: 'aquila' ,
    famiglia: 'accipitridae', 
    classe: 'uccello'
}
,

{
    nome: 'balena' ,
    famiglia: 'cetacei', 
    classe: 'mammifero'
}
,
{
    nome: 'serpente' ,
    famiglia: 'colubridae', 
    classe: 'rettile'
}
,

{
    nome: 'ape' ,
    famiglia: 'apidi', 
    classe: 'insetto'
}

];

const mammifero = animals.filter( animal => animal.classe === 'mammifero');
console.log(mammifero);