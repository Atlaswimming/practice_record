const binarySearch = (nums = [], target) => {
  const length = nums.length;
  if (length === 0) {
    return -1;
  }

  let left = 0;
  let right = length - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);

    if (nums[middle] === target) {
      return middle;
    } else if (nums[middle] > target) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
  return -1;
};

// console.log(binarySearch([-1,0,5,9,13], 9))
// console.log(binarySearch([-1,0,5,9,13], -1))
// console.log(binarySearch([-1,0,5,9,13], 13))
// console.log(binarySearch([-1,0,5,9,13], 6))
// console.log(binarySearch([5], 5))
// console.log(binarySearch([], 9))

const squareRoot = x => {
  let start = 0;
  let end = x;

  while (start <= end) {
    let bottom = Math.floor((start + end) / 2);
    let top = bottom + 1;
    let bottom_square = Math.pow(bottom, 2);
    let top_square = Math.pow(top, 2);

    if (bottom_square === x || (bottom_square < x && top_square > x)) {
      return bottom;
    } else if (top_square === x) {
      return top;
    } else if (bottom_square > x) {
      end = bottom;
    } else {
      start = top;
    }
  }
};

// console.log(squareRoot(0))
// console.log(squareRoot(1))
// console.log(squareRoot(2))
// console.log(squareRoot(4))
// console.log(squareRoot(5))
// console.log(squareRoot(8))
// console.log(squareRoot(100))

// search in rotated sorted Array
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search_rotated_array = function(nums, target) {
  const l = nums.length;

  // when call this function, make sure the lenght of nums is lagerer than 1
  const findIndex = () => {
    let start = 0;
    let end = nums.length - 1;

    while (start <= end) {
      const middle = Math.floor((start + end) / 2);
      if (nums[middle] > nums[middle + 1]) {
        return middle;
      } else {
        if (nums[middle] < nums[start]) {
          // 丢掉右侧
          end = middle - 1;
        } else {
          start = middle + 1;
        }
      }
    }
    return -1;
  };
  // when call this function, make sure the lenght of nums is lagerer than 1
  const finxTarget = (start, end) => {
    while (start <= end) {
      const middle = Math.floor((start + end) / 2);
      if (nums[middle] === target) {
        return middle;
      } else if (nums[middle] > target) {
        end = middle - 1;
      } else {
        start = middle + 1;
      }
    }
    return -1;
  };

  if (l === 0) {
    return -1;
  }
  if (l === 1) {
    return nums[0] === target ? 0 : -1;
  }
  const rotatedIndex = findIndex();
  let start = 0;
  let end = l - 1;

  if (rotatedIndex === -1) {
    return finxTarget(start, end);
  }

  if (nums[0] > target) {
    // 在拐点右侧
    return finxTarget(rotatedIndex + 1, end);
  } else {
    return finxTarget(start, rotatedIndex);
  }
};

console.log("[1,3], 1:", search_rotated_array([1, 3], 1));
console.log("[1,3], 3:", search_rotated_array([1, 3], 3));
console.log("[1], 0:", search_rotated_array([1], 0));
console.log("[4,1,3], 3:", search_rotated_array([4, 1, 3], 3));
console.log(
  "[4,5,6,7,0,1,2], 0:",
  search_rotated_array([4, 5, 6, 7, 0, 1, 2], 0)
);
console.log(
  "[4,5,6,7,8,1,2,3], 8:",
  search_rotated_array([4, 5, 6, 7, 8, 1, 2, 3], 8)
);
console.log(
  "[4,5,6,7,8,1,2,3], 5:",
  search_rotated_array([4, 5, 6, 7, 8, 1, 2, 3], 5)
);
console.log(
  "[4,5,6,7,8,1,2,3], 2:",
  search_rotated_array([4, 5, 6, 7, 8, 1, 2, 3], 2)
);
console.log(
  "[4,5,6,7,8,1,2,3], 0:",
  search_rotated_array([4, 5, 6, 7, 8, 1, 2, 3], 0)
);
console.log(
  "[6,7,8,1,2,3,4,5], 6:",
  search_rotated_array([6, 7, 8, 1, 2, 3, 4, 5], 6)
);
