//Quali sono i tipi primitivi principali in TypeScript?

//Stringhe, booleani, numeri, undefined, null ed any (da non usare se non in casi veramente estremi)

// 2) Crea tre variabili tipizzate: una stringa con il tuo nome, un numero con la tua età, e un booleano che indica se stai studiando TypeScript.

const myName:string = 'Patricia'
const myAge:number = 35
const isStudying:boolean = true

// 3) Tipizza il parametro della seguente funzione:
// const greet = (name) => {  return "Ciao " + name }

const greet = (name:string) => {return 'Ciao' + name}

// 4) Specifica il tipo di ritorno della seguente funzione:
// const sum = (a: number, b: number) => {  return a + b }

// number

// 5) Crea una funzione che accetti un prezzo e restituisca il prezzo con IVA (22%). Usa i tipi appropriati.

const totalPrice = (price:number):number => {
    return price * 1.22
}

//tipo del parametro: number, tipo del risultato che deve dare la funzione:number

// 6) Crea una funzione che concateni due stringhe e restituisca la lunghezza totale.

const twoStrings = (str1:string, str2:string) => {
    return str1+ ' ' + str2
    
}
console.log(twoStrings('Ciao','Patricia').length)

// 7) Cos'è un Type Union e come si scrive?
//Il type union è l'unione di due tipo per una variabile. Si scrive con il simbolo |. Ad esempio, potrei voler assegnare a una variabile il type string e number, di modo che possa accettare tutti e due i tipi di dato che andrò a fornirle.

// 8) Crea una variabile che possa contenere un numero, null o undefined.

let crazyVar: number | null | undefined

// 9) Crea un tipo per rappresentare i giorni della settimana usando union di stringhe letterali. 
//(mi sono fatta spiegare la consegna da chatgpt perché non avevo capito cosa si intendesse con stringhe letterali)

type DaysOfTheWeek = 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday'

// 10) Tipizza il seguente array di numeri nei due modi possibili:

// const numbers = [1, 2, 3]

let numbers:number[]
let numbers2: Array<number>[]

// 11) Crea una tupla per definire un array di 5 elementi, i primi 3 devono essere stringhe e gli ultimi due numeri.

let tupla:[string, string, string,number,number]

// 12) Qual è la differenza tra type e interface?
//il type rappresenta la natura del dato, l'interface rappresenta la sua struttura. L'interface è un "modello" che utilizziamo con gli oggetti, che definiamo e a cui dobbiamo attenerci.

// 3) Definisci un'interfaccia in TypeScript per un oggetto dotato di proprietà "firstname", "lastname", e "age".

interface Person {
    firstName:string,
    lastName:string,
    age:number
}

// 14) Crea un'interfaccia per un utente con email obbligatoria e telefono opzionale.

interface User {
    email:string,
    phone?:number
}

// 15) Crea un array tipizzato di oggetti "Studente" con nome e voto.

interface Student{
    name:string,
    grade:number
}

let arrayofStudents:Student[] = []


// 16) Crea un'interfaccia base "Veicolo" e estendila per creare "Auto".

interface Vehicle {
    manufacturer:string,
    model:string | number,
    productionYear: number,
    
}

interface Car extends Vehicle {
    numberOfTires:number
}
// 17) Crea un oggetto che implementi l'interfaccia Auto.

const car1: Car = {
    manufacturer:'Volkgswagen',
    model:'Tiguan',
    productionYear:2023,
    numberOfTires:4
}

// 18) Cosa sono i Generics in TypeScript?
//con generics si intende il passaggio del TIPO di dato come PARAMETRO di UN'INTERFACCIA affinché essa sia più facilmente riutilizzabile.

// 19) È possibile avere più tipi generici in una funzione?
// Sì (ho cercato l'informazione)

// 20) Crea un'interfaccia generica per una risposta API.  

interface APIResponse<T>{
    response:T
}