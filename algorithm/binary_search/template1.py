def binary_search(nums, target):
    '''template one for baniry sarch'''

    if len(nums) == 0:
        return -1

    left = 0
    right = len(nums) - 1
    
    while left <= right:
        middle = (left + right) // 2
        if nums[middle] == target:
            return middle
        elif nums[middle] < target:
            left = middle + 1
        else:
            right = middle - 1

    return -1

# print(binary_search([-1,0,5,9,13], 9))
# print(binary_search([-1,0,5,9,13], -1))
# print(binary_search([-1,0,5,9,13], 13))
# print(binary_search([-1,0,5,9,13], 6))
# print(binary_search([5], 5))
# print(binary_search([], 9))

class SquareRoot:
    """
    Compute and return the square root of x,
    where x is guarranteed to be a  non-negative integer
    """
    def mySqrt(self, x: int) -> int:
        start = 0
        end = x
        while start <= end:
            # << 按位左移，左移n位相当于乘以2的n次方
            # >> 按位右移，左移n位相当于除以2的n次方
            bottom = (start + end) >> 1
            top = bottom + 1

            bottom_square = bottom**2
            top_value = top**2
            
            if bottom_square == x or (bottom_square <= x and top_value > x):
                return bottom
            elif top_value == x:
                return top
            elif bottom_square > x:
                end = bottom
            else:
                start = top

square_root = SquareRoot()
# print(square_root.mySqrt(0))
# print(square_root.mySqrt(1))
# print(square_root.mySqrt(2))
# print(square_root.mySqrt(4))
# print(square_root.mySqrt(5))
# print(square_root.mySqrt(8))
# print(square_root.mySqrt(100))


# search in rotated sorted Array
from typing import List
class SearchRotatedArray:
    def find_rotated_index(self):
        start = 0
        end = len(self.nums) - 1

        if self.nums[start] < self.nums[end]:
            return -1

        while start <= end:
            middle = (start + end) >> 1
            if self.nums[middle] > self.nums[middle + 1]:
                return middle
            if self.nums[middle] < self.nums[start]:
                end = middle - 1
            else:
                start = middle + 1
        return -1

    def finx_number(self, start, end):
        while start <= end:
            middle = (start + end) >> 1
            if self.nums[middle] == self.target:
                return middle
            elif self.nums[middle] > self.target:
                end = middle - 1
            else:
                start = middle + 1
        return -1
            
    def search(self, nums: List[int], target: int) -> int:
        l = len(nums)
        start = 0
        end = l - 1
        
        if l == 0:
            return -1
        elif l == 1:
            return 0 if nums[0] == target else -1
        
        self.nums = nums
        self.target = target

        rotated_index = self.find_rotated_index()

        if rotated_index == -1:
            # 没有旋转，直接搜
            return self.finx_number(start, end)
        if nums[start] > target:
            # 在后半截
            return self.finx_number(rotated_index + 1, end)
        else:
            return self.finx_number(start, rotated_index)

test_search_rotated_array = SearchRotatedArray()

print('[1,3], 1:', test_search_rotated_array.search([1,3], 1))
print('[1,3], 3:', test_search_rotated_array.search([1,3], 3))
print('[1], 0:', test_search_rotated_array.search([1], 0))
print('[4,1,3], 3:', test_search_rotated_array.search([4,1,3], 3))
print('[4,5,6,7,0,1,2], 0:', test_search_rotated_array.search([4,5,6,7,0,1,2], 0))
print('[4,5,6,7,8,1,2,3], 8:', test_search_rotated_array.search([4,5,6,7,8,1,2,3], 8))
print('[4,5,6,7,8,1,2,3], 5:', test_search_rotated_array.search([4,5,6,7,8,1,2,3], 5))
print('[4,5,6,7,8,1,2,3], 2:', test_search_rotated_array.search([4,5,6,7,8,1,2,3], 2))
print('[4,5,6,7,8,1,2,3], 0:', test_search_rotated_array.search([4,5,6,7,8,1,2,3], 0))
print('[6,7,8,1,2,3,4,5], 6:', test_search_rotated_array.search([6,7,8,1,2,3,4,5], 6))


