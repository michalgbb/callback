const arr = [1, 3, 5]

const multiplay = (param) => param * 2;
const add = param => param + 20;
const odd = param => param - 1;

const zmienTablice = (array, callback) => {
    for(let i=0; i < array.length; i++) {
    array[i] = callback(array[i]);
    }
}

zmienTablice(arr, dodawanie);
console.log(arr);

//callback mozemy przesyłac jako funkcje nazwana lub jako funkcje anonimowa

//callback to wymyślne słowo na funkcję przekazaną jako parametr

//bardzo czesto callback stosujemy jako asynchronicznosc aby cos się przed czymś wykonało