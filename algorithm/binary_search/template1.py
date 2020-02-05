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
print(square_root.mySqrt(0))
print(square_root.mySqrt(1))
print(square_root.mySqrt(2))
print(square_root.mySqrt(4))
print(square_root.mySqrt(5))
print(square_root.mySqrt(8))
print(square_root.mySqrt(100))