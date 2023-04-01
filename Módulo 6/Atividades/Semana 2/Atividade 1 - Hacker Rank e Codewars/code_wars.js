//  https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript
function getCount(str) {
    const vogals = ["a", "e", "i", "o", "u"];
    const strArr = str.split("")

    const sum = strArr.reduce((acc, act) => {
        if (vogals.includes(act)) {
            return ++acc
        }
        return acc
    }, 0)

    return sum;
}

// https://www.codewars.com/kata/514b92a657cdc65150000006/train/javascript
function solution(number) {
    let sum = 0;

    for (i = 3; i < number; i++) {
        if (i % 3 === 0 || i % 5 === 0) sum += i;
    }

    return sum;
}

// https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript
function squareDigits(num) {
    const str1 = num + "";
    const arr1 = str1.split("");
    const arr2 = arr1.map(num => num * num);
    const str2 = arr2.join("");

    return +str2;
}

// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/javascript

function duplicateCount(text) {
    const iText = text.toLowerCase();
    const iTextArr = iText.split("")
    const duplicate = []
    const arr = []

    iTextArr.forEach(el => {
        if (arr.includes(el) && !duplicate.includes(el)) {
            return duplicate.push(el)
        }
        return arr.push(el)
    })

    return duplicate.length
}

// https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript
function highAndLow(numbers) {
    const strArr = numbers.split(" ");
    return `${Math.max(...strArr)} ${Math.min(...strArr)}`
}


// https://www.codewars.com/kata/581b30af1ef8ee6aea0015b9/train/javascript
const countWins = (winnerList, country) => winnerList.filter(element => element.country === country).length;

// https://www.codewars.com/kata/51c7d8268a35b6b8b40002f2/train/javascript
function solution(pairs) {
    let str = "";
    for (let keys in pairs) {
        str += `${keys} = ${pairs[keys]},`
    }
    return str.slice(0, str.length - 1)
}

// https://www.codewars.com/kata/58ff1c8b13b001a5a50005b4/train/javascript
function sortAnimal(animal) {
    if (animal == null) return null

    animal.sort((a, b) => {
        return a.numberOfLegs - b.numberOfLegs;
    });
    animal.sort((a, b) => {
        if (a.numberOfLegs === b.numberOfLegs) {
            return a.name < b.name ? -1 : 1;
        }
    });
    return animal;
}

// https://www.codewars.com/kata/5b6375f707a2664ada00002a/train/javascript
const whosOnline = (friends) => {
    const status = { online: [], offline: [], away: [] };

    for (let i = 0; i < friends.length; i++) {
        if (friends[i].status === "offline") {
            status.offline.push(friends[i].username);

        } else if (friends[i].status === "online" && friends[i].lastActivity <= 10) {
            status.online.push(friends[i].username);

        } else {
            status.away.push(friends[i].username);
        }
    }

    if (status.online.length === 0) {
        delete status.online;

    }

    if (status.offline.length === 0) {
        delete status.offline;

    }

    if (status.away.length === 0) {
        delete status.away;
    }

    return status;
};

// https://www.codewars.com/kata/56c22c5ae8b139416c00175d/train/javascript
function match(candidate, job) {
    let wiggle = 0;
    wiggle = (candidate.minSalary * 0.1) + job.maxSalary;

    if (candidate.minSalary == null || job.maxSalary == null) {
        throw "Invalid input.";
    } else if (candidate.minSalary <= wiggle) {
        return true;
    }
    return false;
}