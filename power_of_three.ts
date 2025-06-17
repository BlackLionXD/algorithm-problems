



function isPowerThree(num: number): boolean {
    if (num <= 0) return false;

    while (num % 3 === 0) {
        num = num / 3;
    }

    return num === 1;
}




let num1 = 81;

let num2 = 35;

console.log(isPowerThree(num1));

console.log(isPowerThree(num2));