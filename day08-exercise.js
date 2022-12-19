// exercise 1

class Employee {
    constructor(_name) {
        this.name = _name;
    }
}

class FullTime extends Employee {
    constructor(_name) {
        super(_name);
        this.working = [];   // untuk menampung data nama, jam kerja, dan gaji perhari. nanti akan di push, seperti di line ke 4x
        this.fullTime = {
            salaryA: 100000,
            salaryB: 75000
        }
    }

    addWorking = (_checkIn, _checkOut) => {
        console.log(parseInt(_checkIn.split(':')[0]));
        console.log(parseInt(_checkOut.split(':')[0]));
        console.log(parseInt(_checkOut.split(':')[0]) - parseInt(_checkIn.split(':')[0]));
        let dayliHour = (parseInt(_checkOut.split(":")[0]) - parseInt(_checkIn.split(":")[0])) //+ (parseInt(_checkIn.split(":")[1]) + parseInt(_checkOut.split(":")[1])) / 60; -> ini untuk menghitung menit
        let overtime = dayliHour - 6;
        console.log(overtime);
        let mainSalary = overtime > 0 ? 6 * this.fullTime.salaryA : dayliHour * this.fullTime.salaryA;
        console.log(mainSalary);
        let overSalary = overtime > 0 ? overtime * this.fullTime.salaryB : 0;
        console.log(overSalary);
        this.working.push({
            name: this.name,
            dayliHour,
            dayliSalary: mainSalary + overSalary
        })
        console.log(this.working);
    }

    totalSalary = () => {
        let amount = 0;
        console.log(this.working);
        this.working.forEach(val => amount += val.dayliSalary)
        return amount;
    }

}

class PartTime extends Employee {
    constructor(_name) {
        super(_name);
        this.working = [];
        this.partTime = {
            salaryA: 50000,
            salaryB: 30000
        }
    }

    addWorking = (_checkIn, _checkOut) => {
        let dayliHour = (parseInt(_checkOut.split(":")[0]) - parseInt(_checkIn.split(":")[0])) + (parseInt(_checkIn.split(":")[1]) + parseInt(_checkOut.split(":")[1])) / 60;
        let overtime = dayliHour - 6;
        let mainSalary = overtime > 0 ? 6 * this.partTime.salaryA : dayliHour * this.partTime.salaryA;
        let overSalary = overtime > 0 ? overtime * this.partTime.salaryB : 0
        this.working.push({
            name: this.name,
            dayliHour,
            dayliSalary: mainSalary + overSalary
        })
        console.log(this.working);
    }

    totalSalary = () => {
        let amount = 0;
        this.working.forEach(val => amount += val.dayliSalary)
        return amount;
    }

}

let attendanceFT = new FullTime("Ade");
let attendancePT = new PartTime("Edo");
attendanceFT.addWorking("09:00", "16:00"); // day01
attendanceFT.addWorking("09:00", "15:00"); // day02
attendancePT.addWorking("09:00", "18:00"); // day01-part-time
attendancePT.addWorking("09:00", "18:00"); // day02-part-time
attendancePT.addWorking("09:00", "18:00"); // day03-part-time
attendancePT.addWorking("09:00", "18:00"); // day04-part-time
attendancePT.addWorking("09:00", "18:00"); // day05-part-time
console.log(attendanceFT.working);
console.log(attendanceFT.totalSalary().toLocaleString('id', { style: "currency", currency: "IDR" }));
console.log(attendancePT.working);
console.log(attendancePT.totalSalary().toLocaleString('id', { style: "currency", currency: "IDR" }));
let printWorking = attendancePT.working.map((val,idx)=>`Day-${idx+1} ${val.name} working ${val.dayliHour}hr and dayli salary ${val.dayliSalary}`)
console.log(printWorking.join('\n'));



// Exercise 2
class Player {
    constructor(_name, _health = 100, _power = 10) {
        this.name = _name;
        this.health = _health;
        this.power = _power;
    }

    hit = (pwr) => {
        this.health -= pwr;
        return `Health reduce by ${pwr}`;
    }

    useItem = (item) => {
        this.health += item?.health || 0;       //item?.health memakai tanda tanya untuk proteksi, property di object tersebut ada atau tidak.
        this.power += item?.power || 0;
        return `Update Health => ${this.health}, Power => ${this.power}`;
    }

    showStatus = () => {
        return `Player ${this.name} (Health=>${this.health} | Power=>${this.power})`;
    };
}

class ShootingGame {
    constructor(_playerA, _playerB) {
        this.playerA = _playerA;
        this.playerB = _playerB;
    }

    getRandomItem = () => {
        let item = ['health', 'power'];
        let getIdx = Math.round(Math.random());
        return {
            [item[getIdx]]: 10
        };
    }

    start = () => {
        // console.log(this.playerA.showStatus());
        // console.log(this.playerB.showStatus());
        while (true) {
            console.log("BEFORE", `${this.playerA.showStatus()}\n${this.playerB.showStatus()}`);
            this.playerA.useItem(this.getRandomItem());
            this.playerB.useItem(this.getRandomItem());
            this.playerA.hit(this.playerB.power);
            this.playerB.hit(this.playerA.power);
            console.log("AFTER", `${this.playerA.showStatus()}\n${this.playerB.showStatus()}`);
            if (this.playerA.health <= 0) {
                return `WINNER ${this.playerB.name}`
            }
            if (this.playerB.health <= 0) {
                return `WINNER ${this.playerA.name}`
            }
        }
    }
}

let playerA = new Player("Edo");
let playerB = new Player("Andrew");
let shooting = new ShootingGame(playerA, playerB);
console.log(shooting.start());
