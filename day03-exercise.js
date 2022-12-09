//1
let n = 9;

for(let i = 1; i <= 10; i++){

    n * i  

console.log(`${n} * ${i}`)
}


//Write a code to check whether a string is a palindrome or not.
// CONTOH : KATAK jika di balik KATAK = TRUE || ROSA jika dibalik ASOR = FALSE

let kata = "katak";
let kebalikan = kata.split("").reverse().join("")  //split("") -> ini tidak di spasi karena mau split di var kata, jika di spasi yang di split adalah kata yang ada spasi

console.log(kebalikan)

if( kata == kebalikan){
    console.log(`${kebalikan} = palindrome`);
} else {
    console.log(`${kebalikan} = bukan palindrome`);
}

// Write a code to convert centimeter to kilometer.
// km -> hm -> dam -> m -> dm -> cm -> m

let Cm = 100000;
const Km = Cm / 100000;

console.log(`${Cm} Centimeter = ${Km} Kilometer`);

// Write a code to format number as currency (IDR) || Example : 1000 → “Rp. 1.000,00”

let num = 11000;
const formater = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
});

console.log (formater.format(num));


// Write a code to remove the first occurrence of a given “search string” from a string
// Example : string = “Hello world”, search string = “ell” → “Ho world”


// Write a code to capitalize the first letter of each word in a string || Example : “hello world” → “Hello World”

let judul = "hello world";
let capital = "";

const ar = judul.split(" ");
console.log(ar)

for (i = 0; i < ar.length; i++){
    console.log(i)

    capital = capital + ar[i].toUpperCase().charAt(0) + ar[i].substring(1) + " ";

}

console.log(capital);


//Write a code to reverse a string


let kata1 = "purwadhika";
let kebalikan1 = kata1.split("").reverse().join();

console.log(kebalikan1)


// atau


let temp = "";

for (let i = 0; i < kata1.length; i++){
    temp += kata1[kata1.length - 1 - i];
}

console.log(temp);