// nomor 1 

class Siswa {
    constructor(_nama, _email, _date, _Score) {
        this.nama = _nama;
        this.email = _email;
        this.date = _date
        this.age = this.getUmur();
        this.score = _Score
    }

    getUmur = () => {
        console.log(this.date.split("-"));
        let tahunLahir = parseInt(this.date.split("-")[0]);
        console.log(tahunLahir);

        let tanggal = new Date();
        return tanggal.getFullYear() - tahunLahir;
    }
}
let dbSiswa = [
    new Siswa("Edward", "Edward@gmail.com", "1997-04-25", 85),
    new Siswa("Andrew", "Andrew@gmail.com", "1998-11-12", 65),
    new Siswa("Zafran", "Zafran@gmail.com", "1992-02-01", 80),
    new Siswa("Budi", "Budi@gmail.com", "1996-11-11", 75),
];

console.log(dbSiswa);

const calculateSiswa = function (arr) {

    function maxScore(arr){
        for(let i = 0; i < arr.length; i++){
            for(var j = 0; j < ( arr.length - i - 1); j++){
                if(arr[j].score > arr[j + 1].score){
                    var temp = arr[j]
                    arr[j] = arr[j + 1]
                    arr[j + 1] = temp
                }
            }
        }
        console.log(arr);
        return arr[arr.length - 1];
    }
    console.log(maxScore(arr));

    function minScore(arr){
        for(let i = 0; i < arr.length; i++){
            for(var j = 0; j < ( arr.length - i - 1); j++){
                if(arr[j].score > arr[j + 1].score){
                    var temp = arr[j]
                    arr[j] = arr[j + 1]
                    arr[j + 1] = temp
                }
            }
        }
        console.log(arr);
        return arr[0];
    }
    console.log(minScore(arr));

    function aveScore(arr){
        let totalScore = 0;

        for(let i = 0; i < arr.length; i++){
           
            totalScore += arr[i].score;
        }
        
        averageScore = totalScore / arr.length

        return averageScore;
    }

    
    function maxAge(arr){
        for(let i = 0; i < arr.length; i++){
            for(var j = 0; j < ( arr.length - i - 1); j++){
                if(arr[j].age > arr[j + 1].age){
                    var temp = arr[j]
                    arr[j] = arr[j + 1]
                    arr[j + 1] = temp
                }
            }
        }
        console.log(arr);
        return arr[arr.length-1];
    }
    console.log(maxAge(arr));

    function minAge(arr){
        for(let i = 0; i < arr.length; i++){
            for(var j = 1; j < ( arr.length - i - 1); j++){
                if(arr[j].age > arr[j + 1].age){
                    var temp = arr[j]
                    arr[j] = arr[j + 1]
                    arr[j + 1] = temp
                }
            }
        }
        console.log(arr);
        return arr[0];
    }
    console.log(minAge(arr));

    function aveAge(arr){
        let totalAge = 0;

        for(let i = 0; i < arr.length; i++){
            totalAge += arr[i].age;
        }
        averageAge = totalAge / arr.length;

        return averageAge;
    }
    

    return {
        score: {
            highest: maxScore(arr),
            lowest: minScore(arr),
            average: aveScore(arr)
        },
        age: {
            highest: maxAge(arr),
            lowest: minAge(arr),
            average: aveAge(arr)
        }
        
    }
}
console.log(calculateSiswa(dbSiswa));

//ATAU

class Student {
    constructor(name, email, birth, score) {
        let date = new Date(birth)
        let dateNow = new Date()
        this.name = name;
        this.email = email;
        this.birth = date;
        this.age = dateNow.getFullYear() - date.getFullYear();
        this.score = score;
    }
}

console.log(new Student("Edo", "edo@mail.com", "1997-04-25", 85));
let dbStudent = [
    new Student("Edward", "Edward@gmail.com", "1997-04-25", 85),
    new Student("Andrew", "Andrew@gmail.com", "1998-11-12", 65),
    new Student("Zafran", "Zafran@gmail.com", "1992-02-01", 80),
    new Student("Budi", "Budi@gmail.com", "1996-11-11", 75),
];

// sama saja kayak diatas baca nya, ibarat kalo diambil dari database seperti ini

// let dbStudent = [];
// dbStudent.push(new Student("Edo", "edo@mail.com", "1997-04-25", 85));
// dbStudent.push(new Student("Andrew", "and@mail.com", "1998-11-12", 65));
// dbStudent.push(new Student("Zafran", "zaf@mail.com", "1992-02-01", 80));
// dbStudent.push(new Student("Budi", "budi@mail.com", "1996-11-11", 75));

console.log(dbStudent);

// let tempScore = [{
//     score: 70
// },
// {
//     score: 40
// },
// {
//     score: 50
// }];
// tempScore.sort((a, b) => a.score - b.score);
// console.log(tempScore);

let calculateStudent = (arr) => {
    let scrTotal = 0, ageTotal = 0;     // untuk menampung total supaya bisa dapat rata2
    let scores = [...arr.sort((a, b) => a.score - b.score)]; // untuk sortir ascending, jika ingin descending b - a
    let ages = [...arr.sort((a, b) => a.age - b.age)];

    for (let i = 0; i < arr.length; i++) {
        scrTotal += arr[i].score;
        ageTotal += arr[i].age;
    }
    
    return {
        score: {
            highest: scores[scores.length - 1],
            lowest: scores[0],
            average: scrTotal / scores.length
        },
        age: {
            highest: ages[ages.length - 1],
            lowest: ages[0],
            average: ageTotal / ages.length
        }
    }
}
console.log(calculateStudent(dbStudent));


// nomor 2

// Exercise 2
class Product {
    constructor(_name, _price) {
        this.name = _name;
        this.price = _price;
    }
}

let dbProduct = [
    new Product("Apel", 5000),
    new Product("Lemon", 10000)
]

class Transaction {
    
    constructor() {     
        this.cart = [];
        this.total = 0;
    }

    addToCart = (product = null, qty = 1) => { // ini membutuh kan parameter karena data yang diolah berada diluar kelas
        let amount = 0;
        this.cart.push({
            product: { ...product, qty },
            subTotal: qty * product?.price     // tandatanya / ? untuk mengetahui apakah property price di product ada atau tidak. disarankan untuk membuat object
        })
        this.cart.forEach(val => amount += val.subTotal); // val = callbackfunction. karena parameter nya cuman 1 maka tdk memakai () juga tidak apa2
        this.total = amount;    // seluruh product yang ada
    }

    show = () => {
        return "Your total transaction Rp." + this.total.toLocaleString("id")
    }

    checkout = () => {  //ini tidak membutuhkan parameter karena data yang diolah masih didalam kelas yang sama
        let print = '';
        this.cart.forEach((val, idx) => {
            print += `${idx + 1}. ${val.product.name}, ${val.product.price.toLocaleString('id', { style: "currency", currency: "IDR" })}, Qty: ${val.product.qty}, ${val.subTotal.toLocaleString('id', { style: "currency", currency: "IDR" })}\n`;
        })
        print += `Total payment : ${this.total.toLocaleString('id', { style: "currency", currency: "IDR" })}`

        this.cart = []; // supaya cart nya balik lagi kekosong.
        return print;
    }
}
let transaction = new Transaction()
transaction.addToCart(dbProduct[0], 3);
transaction.addToCart(dbProduct[1], 1);
console.log(transaction.show());
console.log(transaction.checkout());