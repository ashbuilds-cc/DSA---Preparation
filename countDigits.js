function countDigits(number) {
    let num = number;
    let count = 0;
    if(num == 0){
        return 1;
    }
    let digits = [];
    while (num !== 0) {
        digits.push(num % 10);
        num = Math.floor(num / 10);
        count++;
    }
    console.log(digits.join(""))
    return count;
}

function palindromeNumber (number) {
    let num = number;
    if(num <= 0){
        return false;
    }
    let reverse = 0;
    while (num !== 0) {
        reverse = (10 * reverse) + (num%10);
        num = Math.floor(num / 10);
    }
    return number - reverse === 0;
}


console.log(palindromeNumber(1221));