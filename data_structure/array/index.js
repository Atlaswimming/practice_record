/**
* 题目描述
* 在一个长度为 n 的数组里的所有数字都在 0 到 n-1 的范围内。数组中某些数字是重复的，但不知道有几个数字是重复的，也不知道每个数字重复几次。请找出数组中任意一个重复的数字。
* 
* Input:
* {2, 3, 1, 0, 2, 5}
* 
* Output:
* 2
* 
* 解题思路
* 要求时间复杂度 O(N)，空间复杂度 O(1)。因此不能使用排序的方法，也不能使用额外的标记数组。
* 
* 对于这种数组元素在 [0, n-1] 范围内的问题，可以将值为 i 的元素调整到第 i 个位置上进行求解。在调整过程中，如果第 i 位置上已经有一个值为 i 的元素，就可以知道 i 值重复。
* 
* 以 (2, 3, 1, 0, 2, 5) 为例，遍历到位置 4 时，该位置上的数为 2，但是第 2 个位置上已经有一个 2 的值了，因此可以知道 2 重复
**/

var source = [5,3,1,2,2,0];

((source) => {

    const l = source.length;

    if(l === 0) return null;

    for(let i = 0; i < l; i++) {
        
        let curr = source[i];
        let temp = source[curr];

        if(temp === curr) return temp;

        source[i] = curr;
        source[temp] = temp;

    }

    return null
})(source);


/**
* 题目描述
* 给定一个二维数组，其每一行从左到右递增排序，从上到下也是递增排序。给定一个数，判断这个数是否在该二维数组中。
* 
* Consider the following matrix:
* [
*   [1,   4,  7, 11, 15],
*   [2,   5,  8, 12, 19],
*   [3,   6,  9, 16, 22],
*   [10, 13, 14, 17, 24],
*   [18, 21, 23, 26, 30]
* ]
* 
* Given target = 5, return true.
* Given target = 20, return false.
* 解题思路
* 要求时间复杂度 O(M + N)，空间复杂度 O(1)。其中 M 为行数，N 为 列数。
* 
* 该二维数组中的一个数，小于它的数一定在其左边，大于它的数一定在其下边。因此，从右上角开始查找，就可以根据 target 和当前元素的大小关系来快速地缩小查找区间，每次减少一行或者一列的元素。当前元素的查找区间为左下角的所有元素。
**/

var source = [
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
];
var target = -121;
function findValueOfTwoDimensionalArray(source, target) {
    let count = 0;
    let rows = source.length;
    if(rows === 0) return false;

    let cols = source[0].length;
    if(cols === 0) return false;

    let start = source[rows-1][0];
    let i = rows - 1;
    let j = 0;
    while(i >= 0 && j < cols) {
        if(source[i][j] === target) return [i, j];
        if(source[i][j] > target) i--;
        else j++;
            
    }
    return false;
}

findValueOfTwoDimensionalArray(source, target);
