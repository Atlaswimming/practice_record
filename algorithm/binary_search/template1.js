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

// console.log(binarySearch([-1,0,5,9,13], 9))
// console.log(binarySearch([-1,0,5,9,13], -1))
// console.log(binarySearch([-1,0,5,9,13], 13))
// console.log(binarySearch([-1,0,5,9,13], 6))
// console.log(binarySearch([5], 5))
// console.log(binarySearch([], 9))


const squareRoot = (x) => {
    let start = 0;
    let end = x;

    while(start <= end) {
        let bottom = Math.floor((start + end) / 2);
        let top = bottom + 1;
        let bottom_square = Math.pow(bottom, 2);
        let top_square = Math.pow(top, 2);

        if(bottom_square === x || (bottom_square < x && top_square > x)){
            return bottom;
        }
        else if(top_square === x) {
            return top;
        }
        else if(bottom_square > x) {
            end = bottom
        }
        else {
            start = top
        }
    }
}

console.log(squareRoot(0))
console.log(squareRoot(1))
console.log(squareRoot(2))
console.log(squareRoot(4))
console.log(squareRoot(5))
console.log(squareRoot(8))
console.log(squareRoot(100))