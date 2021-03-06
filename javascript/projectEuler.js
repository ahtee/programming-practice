// Project Euler.js

// #1
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

// function threeOrFive(num) {
//     var sum = 0;
//     for (var i = 3; i < num; i++) {
//         if (i % 3 === 0 || i % 5 === 0) {
//             sum += i;
//         }
//     }
//     console.log(sum);
// }

// threeOrFive(1000);

// #2
// Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:
// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
// By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.
function fibonnaci(num) {
    let arr = [1, 2, 3, 5, 8, 13, 21, 34, 55, 89];
    let i = 9;
    do {
        arr.push(arr[i - 1] + arr[i - 2]);
        i += 1;
    } while (arr[i - 1] + arr[i - 2] < num)
    console.log(`The array is: ${arr}`);
    addArrayEvenSum(arr);
}

function addArrayEvenSum(array) {
    let sum = 0;
    for (let j = 0; j < array.length; j++) {
        if (array[j] % 2 == 0) {
            console.log(`array item is even. adding ${array[j]} to the sum`);
            sum = sum + array[j];
        }
    }
    console.log(`${sum}`);
}

fibonnaci(4000000);