def binarySearch(nums, target):
    """
    :type nums: List[int]
    :type target: int
    :rtype: int
    """
    if len(nums) == 0:
        return -1

    left = 0
    right = len(nums) - 1
    while left + 1 < right:
        mid = (left + right) // 2
        if nums[mid] == target:
            return mid
        elif nums[mid] < target:
            left = mid
        else:
            right = mid

    # Post-processing:
    # End Condition: left + 1 == right
    print(left, right)
    if nums[left] == target: return left
    if nums[right] == target: return right
    return -1

print(binarySearch([1,2,2,3,4,6,7],4))


from typing import List
class SearchBothIndex:
    def binarySearch(self, leftIndex, isLeft):
        l = len(self.nums)
        left = leftIndex
        right = l - 1
        while left < right:
            if not isLeft and left + 1 == right:
                break
            middle = (left + right) >> 1
            if self.nums[middle] == self.target:
                if isLeft:
                    right = middle
                else:
                    left = middle
            elif self.nums[middle] > self.target:
                right = middle - 1
            else:
                left = middle + 1

        if isLeft:
            return left if self.nums[left] == self.target else -1
        else:
            if self.nums[right] == self.target:
                return right
            elif self.nums[left] == self.target:
                return left
            else:
                return -1
        
    def searchRange(self, nums: List[int], target: int) -> List[int]:
        l = len(nums)
        no_result = [-1, -1]

        if l == 0 or target < nums[0] or target > nums[-1]:
            return no_result
        if l == 1:
            return no_result if nums[0] != target else [0, 0]

        result = [-1, -1]
        self.nums = nums
        self.target = target

        result[0] = self.binarySearch(0, True)
        
        if result[0] == -1:
            return no_result
        result[1] = self.binarySearch(result[0], False)

        return result

searchBothIndex = SearchBothIndex()
print(searchBothIndex.searchRange([1,2,2,2,3,4], 7))
print(searchBothIndex.searchRange([1,2,2,2,3,4], 2))
print(searchBothIndex.searchRange([1,2,2,2,3,3,4,4,5], 4))
print(searchBothIndex.searchRange([7, 7], 7))
