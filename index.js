//Quali sono i tipi primitivi principali in TypeScript?
//Stringhe, booleani, numeri, undefined, null ed any (da non usare se non in casi veramente estremi)
// 2) Crea tre variabili tipizzate: una stringa con il tuo nome, un numero con la tua età, e un booleano che indica se stai studiando TypeScript.
var myName = 'Patricia';
var myAge = 35;
var isStudying = true;
// 3) Tipizza il parametro della seguente funzione:
// const greet = (name) => {  return "Ciao " + name }
var greet = function (name) { return 'Ciao' + name; };
// 4) Specifica il tipo di ritorno della seguente funzione:
// const sum = (a: number, b: number) => {  return a + b }
// number
// 5) Crea una funzione che accetti un prezzo e restituisca il prezzo con IVA (22%). Usa i tipi appropriati.
var totalPrice = function (price) {
    return price * 1.22;
};
//tipo del parametro: number, tipo del risultato che deve dare la funzione:number
// 6) Crea una funzione che concateni due stringhe e restituisca la lunghezza totale.
var twoStrings = function (str1, str2) {
    return str1 + ' ' + str2;
};
console.log(twoStrings('Ciao', 'Patricia').length);
// 7) Cos'è un Type Union e come si scrive?
//Il type union è l'unione di due tipi per una variabile. Si scrive con il simbolo |. Ad esempio, potrei voler assegnare a una variabile il type string e number, di modo che possa accettare tutti e due i tipi di dato che andrò a fornirle.
// 8) Crea una variabile che possa contenere un numero, null o undefined.
var crazyVar;
// 10) Tipizza il seguente array di numeri nei due modi possibili:
// const numbers = [1, 2, 3]
var numbers;
var numbers2;
// 11) Crea una tupla per definire un array di 5 elementi, i primi 3 devono essere stringhe e gli ultimi due numeri.
var tupla;
var arrayofStudents = [];
// 17) Crea un oggetto che implementi l'interfaccia Auto.
var car1 = {
    manufacturer: 'Volkgswagen',
    model: 'Tiguan',
    productionYear: 2023,
    numberOfTires: 4
};
