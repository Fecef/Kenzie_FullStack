// https://www.hackerrank.com/challenges/lowest-triangle/problem
function lowestTriangle(trianglebase, area) {
    const res = (area * 2) / trianglebase;

    return Math.round(Math.ceil(res));
}

// https://www.hackerrank.com/challenges/a-very-big-sum/problem

function aVeryBigSum(ar) {
    const res = ar.reduce((a, b) => a + b, 0);

    return res;
}

// https://www.hackerrank.com/challenges/the-time-in-words/problem?isFullScreen=true

function timeInWords(h, m) {
    let res = "";

    const toLiteral = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "quarter",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "fourty",
        50: "fifty",
        60: "sixty",
    }

    for (let i = 21; i <= 60; i++) {
        if (i % 10 === 0) continue;

        const strfI = i.toString();
        const baseNumber = toLiteral[strfI[0] + 0]

        toLiteral[i] = `${baseNumber} ${toLiteral[strfI[1]]}`
    };

    toLiteral[30] = "half";
    toLiteral[45] = "quarter"

    if (m === 0) {
        res = `${toLiteral[h]} o' clock`;
    }

    else if (m === 15) {
        res = `${toLiteral[m]} past ${toLiteral[h]}`;
    }

    else if (m === 30) {
        res = `${toLiteral[m]} past ${toLiteral[h]}`;
    }

    else if (m <= 30) {
        res = `${toLiteral[m]} minutes past ${toLiteral[h]}`;
    }

    else if (m === 45) {
        res = `${toLiteral[60 - m]} to ${toLiteral[h + 1]}`;
    }

    else if (m > 30) {
        res = `${toLiteral[60 - m]} minutes to ${toLiteral[h + 1]}`;
    }

    else if (m > 30 && h === 12) {
        res = `${toLiteral[60 - m]} minutes to zero`;
    }

    if (m === 1) {
        res = res.replace("minutes", "minute")
    }

    return res;
}
