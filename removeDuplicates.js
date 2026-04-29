let arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 3, 3, 4, 5];

// Idea: Maintain 2 pointers. One Pointer maintains the position of uniqueElement and other pointer maintains where the inPlace swap to be done.
function removeDuplicates(nums) {
    let uP = 0;
    for (let currP = 0; currP < nums.length; currP++) {
        if (nums[currP] > nums[uP]) {
            uP++;
            nums[uP] = nums[currP];
        }
    }
    console.log(nums.join(", "))
    return uP + 1;
}

console.log(removeDuplicates(arr));