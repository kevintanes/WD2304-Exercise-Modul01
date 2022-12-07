// 1. Write a code to convert celsius to fahrenheit.
// rumus celcius ke fahrenheit = (celcius * 9/5) + 32

let C = 32;
const F = (C * 9/5)+32;

console.log(`jika Celcius = ${C} derajat, maka Fahrenheit = ${F} derajat`);


// 2. Write a code to check whether the number is odd or even

let num = 5;

if (num% 2 == 0){
    console.log("genap");
} else {
    console.log("ganjil");
}


// 3. Write a code to check whether the number is prime number or not

/*
1. 2 adalah bilangan prima
2. semua bilangan genap bukan prima kecuali 2
3. tidak boleh di bagi 1 dan bilangan itu sendiri
*/

let num1 = 11;
let stat = true;

for (i = 2; i < num1; i++){
    console.log(i);
    if(num1 % i == 0){
        stat = false
        break;
    }
}
console.log( stat ? `${num1} bilangan prima` :`${num1} bukan bilangan prima`);

// atau

if(stat){
    console.log("bilangan prima")
}else{
    console.log("bukan bilangan prima")
}


/* 4.
  Write a code to find the sum of the numbers 1 to N
  Example : 5 → 1 + 2 + 3 + 4 + 5 = 15 
*/

let num2 = 10;
let Result = 0;


for (let i = 0; i <= num2; i++){
    Result += i;
}

console.log(Result)

//5. Write a code to find factorial of a number.

// syarat nya misal 6 => 1x2x3x4x5x6 = 720


let hasil = 1;
let num3 = 7;

for(let a = 1; a <= num3; a++){
    hasil *= a;
    console.log(hasil)
}

console.log(hasil)


//6. Write a code to print the first N fibonacci numbers.

// 6=> 0,1,1,2,3,5

// 8 = 0,1,1,2,3,5,8,13


let N = 8;

let a = 0;
let b = 1;
let message = "";

for (let i = 0; i < N; i++){
    temp = a + b;

    if(i != 0){
        message += ", "
    }
    message += a.toString()

    a=b;
    b=temp;

}
console.log(`jadi fibonacci ${N} = ${message}`)