// 1. Write a code to find area of rectangle.

let p = 5;
let l = 2;
const LuasPersegiPanjang = p * l;

console.log(`Luas persegi panjang = ${LuasPersegiPanjang} meter persegi`);

// 2. Write a code to find perimeter of rectangle.

const kelilingPersegiPanjang = 2 * (p + l);

console.log(`keliling persegi panjang = ${kelilingPersegiPanjang} meter`);

// 3. Write a code to find diameter, circumference and area of a circle.

let r = 7;
const pi = 3.14;

const diameter = 2 * r;
console.log(`jari - jari ${r} => diameter = ${diameter}`);

const kelilingLingkaran = 2 * pi * r;
console.log(`keliling lingkaran = ${kelilingLingkaran}`)

const luasLingkaran = pi * (r **2);
console.log(`luas lingkaran = ${luasLingkaran}`);

// 4. sss Write a code to find angles of triangle if two angles are given.
// jika sudut a = 15 , b = 27, cari lah sudut c = ?

let a = 15;
let b = 27;
const c = 180 - a - b;
console.log(`jadi sudut c = ${c}`);

//5
let tanggal1 = new Date("2022-11-29");
let tanggal2 = new Date("2022-10-29");
let perbedaanTanggal = Math.abs(tanggal2 - tanggal1);                   // abs = absolut -> walaupun dikurangin hasilnya minus dia jadi plus
let perbedaanHari = Math.round(perbedaanTanggal / (1000 * 3600 * 24));  // round -> pembulatan

console.log(`perbedaan tanggal 1 dan tanggal 2 adalah ${perbedaanHari} hari`)


// 6. Write a code to convert days to years, months and days.
// contoh : 400 days = 1 year, 1 month, 5 days

let days = 950;

let tahun = Math.floor(days / 365 );
let bulan = Math.floor((days % 365) / 30);
let hari = Math.floor((days % 365) % 30);

console.log(`${days} hari = ${tahun} tahun, ${bulan} bulan, ${hari} hari`)