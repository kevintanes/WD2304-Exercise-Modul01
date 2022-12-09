// EXERCISE 1
/*
INPUT : Parameter height 

PROSES :
1. pertama bikin variable untuk berapa n yang mau dibikin triangle, misalkan 3 nanti outputnya jadi 
01
02 03
04 05 06

2. for loop dalam loop


OUTPUT :
01
02 03
04 05 06 
07 08 09 10
*/

let num = 4;

function triangle(asw){

    let msg = "";
    let count = 1;

    for(let i = 0; i < asw; i++){
        console.log(i)

        for(let j = 0; j <= i; j++){    // j <= i biar pola nya dinamis
            console.log(j);

            if(count > 9){
                msg += `${count++} `;

                console.log(msg);

            } else {
                msg += `0${count++} `;
                console.log(msg)
            }

        }

        msg += "\n";
    }

    return msg;
}
console.log(triangle(num));



// EXERCISE 2

/*
INPUT : Parameter n buat looping
bilangan yang habis di bagi 3 akan diganti dengan kata "fizz"
bilangan yang habis di bagi 5 akan diganti dengan kata "buzz"
bilangan yang habis di bagi 3 dan 5 akan diganti dengan kata "fizzbuzz"

PROSES :

OUTPUT : misalkan n = 20 -> 1 2 buzz 4 fizz 6 7 8 fizz buzz 11 fizz 13 14 fizzbuzz 16 17 18 19 buzz
*/

let a = 20;+

function FizzBuzz(n){
    let psn = "";

    for (i = 1; i <= n; i++){
        console.log(i);

        if (i % 3 == 0 && i % 5 == 0){
            psn += "FizzBuzz";
        } else if (i % 3 == 0){
            psn += "Fizz";
        } else if (i % 5 == 0){
            psn += "Buzz";
        } else {
            psn += i;
        }
        psn += "\n";
    }

    return psn;

}
console.log(FizzBuzz(a))




// EXERCISE 3

/* 
INPUT : Parameter weight dan height

PROSES : 
1. bikin varible buat menampung weight dan height
2. bikin Rumus BIM 
3. hasil BIM nanti di if else untuk keterangan

OUPUT : misalkan hasil BMI = 20.5 maka "ideal"
*/

let berat = 90;
let tinggi = 1.77;

function Rumus(b, t){
    const BMI = b / (t **2);
    let keterangan = "";
    
    if(BMI < 18.5){
        keterangan = "less weight";
    } else if (BMI < 24.9){
        keterangan = "Ideal";
    } else if (BMI < 29.9){
        keterangan = "Overweight";
    } else if (BMI < 39.9){
        keterangan = "Very Overweight";
    } else {
        keterangan = "Obestiy";
    }

    return keterangan;
}
console.log(Rumus(berat, tinggi));


// EXERCISE 4   

let arr = [5, 6, 7, 8, 9, 10];

console.log(arr.length);

let newArr = [];

function removeOdd(before, after){

    for(i = 1; i <= before.length; i++){ 
        console.log(i);

        if(before[i-1] % 2 == 0){
            after.push(before[i-1])

            console.log(after)
        }
    }
    
    return after;
}

console.log(removeOdd(arr, newArr));

// EXERCISE 5

let masuk = "zaman dahulu kala"

function pemisah(after){
    
    let inputArr = [];
    let input = "";

    for(let i = 0; i < after.length; i++){
        if (after[i] !== " "){
            input += after[i];
        } else {
            inputArr.push(input);
            input = "";
        }

        if (i == after.length - 1){
            inputArr.push(input);
        }
    }

    return inputArr;
}
console.log(pemisah(masuk));