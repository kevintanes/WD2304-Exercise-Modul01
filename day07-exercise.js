
// No. 1
// Create a function to check if two objects are equal

let person1 = {
    nama: "stiven",
    age: 34,
    noKTP: 1234
};

let person2 = {
    nama: "pribadi",
    noKTP: 1234,
    age: 20
};

const haveSameData = function (ob1, ob2) {
    const object1 = Object.keys(ob1).sort().toString();    //object.keys = untuk mengetahui property dalam object.
    const object2 = Object.keys(ob2).sort().toString();

    if (object1 == object2) {
        return true
    } else {
        return false
    }
}
// kelemahan nya ini jika ada property yang di balik, maka dia akan tetap false. harusnya true
// solusi nya harus di sort dahulu di variable object
console.log(haveSameData(person1, person2));

//atau bisa juga dengan dibawah ini

const similarObject = (objA, objB) => {
    let propA = Object.keys(objA).sort();
    let propB = Object.keys(objB).sort();
    let length = propA.length > propB.length ? propA.length : propB.length;
    let same = true;
    for (let i = 0; i < length; i++) {
        if (propA[i] != propB[i]) {
            same = false;
        }
    }

    return same;
}

console.log(similarObject(person1, person2));

// No. 2
/* Create a function to get the intersection of two objects 
○ Input : { a: 1, b: 2 } & { a: 1, c: 3 }
○ Output: { a: 1 } */

let obj1 = {
    a: 1,
    c: 3,
    d: 4
}

let obj2 = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
}

const intersection = function (ob1, ob2) {
    var newObj = {};

    for (let i in ob1) {

        if (ob1[i] === ob2[i]) {
            newObj[i] = ob1[i];
        }
        console.log(newObj);
    }
    return newObj;
}
console.log(intersection(obj1, obj2));

// atau bisa juga dengan

const intersec = (objA, objB) => {
    let intr = {};
    for (const key in objA) {

        if (objA[key] === objB[key]) {
            intr = { ...intr, [key]: objA[key] }

            console.log(intr);
        }
    }
    return intr;
}
console.log(intersec(obj1, obj2));


// function performIntersection(arr1, arr2) {

//     // converting into Set
//     const setA = new Set(arr1);
//     const setB = new Set(arr2);

//     let intersectionResult = [];

//     for (let i of setB) {

//         if (setA.has(i)) {
//             intersectionResult.push(i);
//         }

//     }
//     return intersectionResult;
// }

// const array1 = [1, 2, 3, 5, 9];
// const array2 = [1, 3, 5, 8];

// const result = performIntersection(array1, array2);
// console.log(result);

// No. 3
// Create a function to merge two array of student data and remove duplicate data
// Student data : name & email
// cth output liat di ppt

let array1 = [
    {
        nama: "Student 1",
        email: "student1@gmail.com"
    },
    {
        nama: "Student 2",
        email: "student2@gmail.com"
    }
]

let array2 = [
    {
        nama: "Student 1",
        email: "student1@gmail.com"
    },
    {
        nama: "Student 3",
        email: "student3@gmail.com"
    }
]


const mergeArray = function (ar1, ar2) {
    // merge two arrays
    let arr = [...ar1, ...ar2];

    let newArray = []; // sebagai penampung sementara, dikarenakan outputnya mau jadi array of object

    for (let i = 0; i < arr.length; i++) {
        let newA = newArray.filter((val) => { //filter = menghasilkan array baru sesuai dengan kondisi yang dibutuhkan
            return val.nama == arr[i].nama;
        })
        console.log(newA);

        if (newA.length == 0) { //cek newArray ada isinya apa tidak
            newArray.push(arr[i]);
        }
    }
    return newArray;
}
console.log(mergeArray(array1, array2));

// atau bisa juga dengan

function mergeRemove(arr1, arr2) {
    // menggabungkan 2 array of object
    let arr3 = [...arr1, ...arr2];
    console.log(arr3);

    return arr3.filter(
        (v, i, a) => a.findIndex((v2) => v2.nama === v.nama) === i
    );
}
console.log(mergeRemove(array1, array2));

// No. 4
// Create a function that can accept input as an array of objects and switch all values into property and property into value
// ○ Input : [{ name: ‘David’, age: 20 }]
// ○ Output : [{ David: ‘name’, 20: ‘age’}]

let bio = [
    {
        nama: "David",
        umur: 20
    }
]




let pindah = function (json) {
    let tukar = {};
    let show = [];

    json.forEach((item) => {
        for (key in item) {
            console.log(key);
            console.log(item);
            console.log(item[key]);
            tukar[item[key]] = key;

        }
    });

    //atau bisa juga memakai yang dibawah

    // for (let i = 0; i < json.length; i++) {
    //     console.log(json.length);
    //     console.log(json);

    //     for (let x in json[i]) {
    //         console.log(x);
    //         console.log(json[i]);

    //         tukar[json[i][x]] = x;

    //     }

    // }

    show.push(tukar);
    return show;

}
console.log(pindah(bio));

// no 5
// Create a function to find a factorial number using recursion

let num = 6;

faktorial = function (num1) {
    if (num1 === 0) {
        return 1;
    }
    console.log(num1);

    return num1 * faktorial(num1 - 1);
}

console.log(faktorial(num));