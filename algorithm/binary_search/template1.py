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

print(binary_search([-1,0,5,9,13], 9))
print(binary_search([-1,0,5,9,13], -1))
print(binary_search([-1,0,5,9,13], 13))
print(binary_search([-1,0,5,9,13], 6))
print(binary_search([5], 5))
print(binary_search([], 9))