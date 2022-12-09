// exercise day 5
// Write a function to get the lowest, highest and average value in the array (with and without sort function).

let arrVal = [33, 50, 7, 8, 20];

// by sort
const newArr = function (data) {
    let min = "";
    let max = "";
    let total = 0;
    let ave = 0;

    let sorting = arrVal.sort((a, b) => a - b)  //dikasi ((a,b) => a - b) supaya dia ngambil nya tidak cuman angka awal
    console.log(sorting)

    min = sorting[0];
    max = sorting[sorting.length - 1];  // ini kenapa di kurang 1, karena index terakhir itu adalah 5. karena indexing dimulai dari 0

    for (let i = 0; i < data.length; i++) {
        total += sorting[i];
        console.log(total)
        ave = total / data.length;
    }

    // jika ingin memakai forEach :
    // sorting.forEach(element => {
    //     total += element
    //     ave = total / sorting.length
    // });

    return `min = ${min}, max = ${max}, average = ${ave}`
}
console.log(newArr(arrVal));

// without sort

const newArr1 = function (data1) {
    let min = Math.min(...arrVal);
    let max = Math.max(...arrVal);
    let hasil = 0;
    let rata = 0;

    for (let i = 0; i < data1.length; i++) {
        hasil += data1[i];
        console.log(hasil)
        rata = hasil / data1.length
    }
    return `min = ${min}, max = ${max}, average = ${rata}`
}
console.log(newArr1(arrVal))

/*
Write a function that takes an array of words and returns a string by concatenating the words in the array, 
separated by commas and - the last word - by an 'and'.
*/

let huruf = ["Hiu", "Paus", "Ikan Pari", "Belut", "Naga", "Tikus"]

const gabung = function (input) {
    let message = "";

    for (let i = 0; i < input.length; i++) {

        if (input[i] == input[input.length - 1]) {
            message += ` dan ${input[i]}`;
        } else if (input[i] == input[input.length - 2]) {
            message += `${input[i]}`;
        } else {
            message += `${input[i]}, `;
        }
    }
    return message;

}
console.log(gabung(huruf));

// atau bisa dengan cara ini :

const tambahArray = function (nama){
    return nama.slice(0, nama.length-1).join(", ") + ` and ${nama[nama.length - 1]}`;
}
console.log(tambahArray(["Honda", "Yamaha", "Ducati", "Porsche", "Buggati"]));

// menambahkan array pertama dan ke dua, jika ada array pertama / kedua nya ada perbedaan length maka dianggap 0
// contoh : array1 = [1,2,3,4]  array2 = [1,2,3] => arrayResult = [2,4,6,3]

let Arr1 = [1, 3, 5, 10, 8];
let Arr2 = [4, 9];

const tambah = function (ar1, ar2) {
    let hasil = [];
    for (i = 0; i < Math.max(ar1.length || ar2.length); i++) {
        hasil[i] = (ar1[i] || 0) + (ar2[i] || 0);
    }
    return hasil;
}
console.log(tambah(Arr1, Arr2));

// atau

let sumTwoArray = (arr1, arr2) => {
    let newArr = [];
    let length = arr1.length > arr2.length ? arr1.length : arr2.length; //baca nya : jika arr1.length lebih besar dari arr2.length maka yang diambil = arr1.length, jika kebalikannya maka diambil arr2.length.
    for (let i = 0; i < length; i++){
        let numb1 = arr1[i] ? arr1[i] : 0;  
        let numb2 = arr2[i] ? arr2[i] : 0;
        newArr.push(numb1 + numb2);
    }
    return newArr;
}
console.log(sumTwoArray([2,5,3], [1,3,5,6,7]));



// menambahkan value array, jika value data nya sudah ada maka hasilnya akan "data sudah ada"
// contoh : array1 = [1, 8, 9] , newArray [2] => hasilnya [1, 8, 9, 2].
// jika ada newArray = [1] => hasilnya = " data sudah ada"

let value = [1, 8, 9, 99, 56];

const clonepush = function (val1, val2) {
    let dataExist = "data sudah ada";

    for (let i = 0; i < val2.length; i++) {

        if (val1 == val2[i]) {
            return dataExist;
        }
    }

    val2.push(val1);

    // atau
    // val2[val2.length] = val1
    
    return val2;
    
}

console.log(clonepush(4, value))