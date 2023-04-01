// https://www.hackerrank.com/challenges/cats-and-a-mouse/problem
function catAndMouse(x, y, z) {
    const resX = Math.abs(x - z)
    const resY = Math.abs(y - z)

    if (resX < resY) return "Cat A";
    if (resY < resX) return "Cat B";

    return "Mouse C"
}

// https://www.hackerrank.com/challenges/compare-the-triplets/problem
function compareTriplets(a, b) {
    let alice = 0;
    let bob = 0;

    for (let i = 0; i < 3; i++) {
        if (a[i] > b[i]) alice++
        if (b[i] > a[i]) bob++
    }

    return [alice, bob]
}

// https://www.hackerrank.com/challenges/plus-minus/problem
function plusMinus(arr) {
    const n = arr.length
    let positive = 0;
    let negative = 0;
    let zero = 0;

    arr.forEach(el => {
        if (el > 0) positive++
        if (el < 0) negative++
        if (el === 0) zero++
    });

    const res1 = (positive / n).toFixed(5);
    const res2 = (negative / n).toFixed(5);
    const res3 = (zero / n).toFixed(5);

    console.log(res1)
    console.log(res2)
    console.log(res3)
}

// https://www.hackerrank.com/challenges/utopian-tree/problem
// https://www.hackerrank.com/challenges/designer-pdf-viewer/problem
// https://www.hackerrank.com/challenges/mini-max-sum/problem
// https://www.hackerrank.com/challenges/birthday-cake-candles/problem
// https://www.hackerrank.com/challenges/staircase/problem
// https://www.hackerrank.com/challenges/divisible-sum-pairs/problem
// https://www.hackerrank.com/challenges/apple-and-orange/problem
// https://www.hackerrank.com/challenges/kangaroo/problem
// https://www.hackerrank.com/challenges/arrays-ds/problem
// https://www.hackerrank.com/challenges/restaurant/problem