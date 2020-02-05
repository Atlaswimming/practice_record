const binarySearch = (nums=[], target) => {
    const length = nums.length;
    if(length === 0) {
        return -1;
    }
    
    let left = 0;
    let right = length - 1;

    while(left <= right) {
        let middle = Math.floor((left + right) / 2);
        
        if(nums[middle] === target) {
            return middle;
        }
        else if(nums[middle] > target) {
            right = middle - 1;
        }
        else {
            left = middle + 1;
        }
    }
    return -1;
}

console.log(binarySearch([-1,0,5,9,13], 9))
console.log(binarySearch([-1,0,5,9,13], -1))
console.log(binarySearch([-1,0,5,9,13], 13))
console.log(binarySearch([-1,0,5,9,13], 6))
console.log(binarySearch([5], 5))
console.log(binarySearch([], 9))