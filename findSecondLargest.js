function findSecondLargest(numbers) {
    if (!numbers.length || numbers.length < 2) {
        return -1;
    }

    let secondLargest = [-Infinity, -Infinity];

    for (let number of numbers) {
        if (number > secondLargest[0]) {
            secondLargest[1] = secondLargest[0];
            secondLargest[0] = number;
        }
        else if (number > secondLargest[1] && number !== secondLargest[0]) {
            secondLargest[1] = number;
        }
    }

    return secondLargest[1] === -Infinity ? -1 : secondLargest[1];
}

console.log(findSecondLargest([1, 2, 3, 3, 3, 5, 9, 0, 9]));