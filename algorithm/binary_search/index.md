# 二分查找算法

## 最基本形式: 在有序不重复的数组中找到一个值

初始化 right = nums.length - 1，所以「搜索区间」**是 [left, right] 的闭区间**，所以 while (left <= right)，同时也决定了 left = mid+1 和 right = mid-1。因为只需找到一个 target 的索引即可，所以当 nums[mid] == target 时可以立即返回。

```java
int binarySearch(int[] nums, int target) {
    int left = 0;
    int right = nums.length - 1;

    while(left <= right) { // 搜索区间为空终止
        int mid = (right + left) / 2;
        if(nums[mid] == target)
            return mid;
        else if (nums[mid] < target)
            left = mid + 1;
        else if (nums[mid] > target)
            right = mid - 1;
    return -1;
}
```

## 变形1：在有序有重复数组中，寻找左侧边界

若有序数组中存在重复数字，寻找左边界的含义代表：数组中有多少个数字小于 target （假定升序），其可能的取值范围是 [0, nums.length]。

初始化 right = nums.length。但是由于索引 nums.length 是越界的，所以「搜索区间」是 [left, right)，所以 while (left < right)，所以 left = mid + 1 和 right = mid。因为需找到 target 的最左侧索引，所以当 nums[mid] == target 时不要立即返回，而要收紧右侧边界以锁定左侧边界。

```java
int left_bound(int[] nums, int target) {
    if (nums.length == 0) return -1;
    int left = 0;
    int right = nums.length; // 注意
    while (left < right) {
        int mid = (left + right) / 2;
        if (nums[mid] == target) {
            right = mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else if (nums[mid] > target) {
            right = mid; // 注意
        }
    }
    // target 比所有数都大
    if (left == nums.length) return -1;
    // while 的终止条件是 left == right 但此时 nums[left] 没做测试
    return nums[left] == target ? left : -1;
}
```

## 变形1：在有序有重复数组中，寻找右侧边界

初始化 right = nums.length
决定「搜索区间」是 [left, right)
所以 while (left < right)
同时 left = mid + 1 和 right = mid

因为需找到 target 的最右侧索引
所以当 nums[mid] == target 时不要立即返回
而要收紧左侧边界以锁定右侧边界
又因为收紧左侧边界时必须 left = mid + 1
所以最后无论返回 left 还是 right，必须减一

```java
int right_bound(int[] nums, int target) {
    if (nums.length == 0) return -1;
    int left = 0, right = nums.length;
    while (left < right) {
        int mid = (left + right) / 2;
        if (nums[mid] == target) {
            left = mid + 1; // 注意
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else if (nums[mid] > target) {
            right = mid;
        }
    }
    if (left == 0) return -1;
    return nums[left-1] == target ? (left-1) : -1; // 此时 left == right
}
```

## 关键点

>注意「搜索区间」和 while 的终止条件，如果存在漏掉的元素，记得在最后检查。
>如需要搜索左右边界，只要在 nums[mid] == target 时做修改即可。搜索右侧时需要减一
