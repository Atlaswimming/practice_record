def binarySearch(nums, target):
    """
    :type nums: List[int]
    :type target: int
    :rtype: int
    """
    if len(nums) == 0:
        return -1

    left = 0
    right = len(nums)
    while left < right:
        mid = (left + right) // 2
        if nums[mid] == target:
            return mid
        elif nums[mid] < target:
            left = mid + 1
        else:
            right = mid

    # Post-processing:
    # End Condition: left == right
    if left != len(nums) and nums[left] == target:
        return left
    return -1

# print(binarySearch([1,2,3,4], 4))

# The isBadVersion API is already defined for you.
# @param version, an integer
# @return a bool
def isBadVersion(version):
    return False if version < 4 else True
class SolutionOfFirstBadVersion:
    def firstBadVersion(self, n):
        """
        :type n: int
        :rtype: int
        """
        if n == 1:
            return 1

        start = 1
        end = n
        while start < end:
            middle = (start + end) >> 1
            result_of_middle = isBadVersion(middle)
            
            if not result_of_middle:
                # middle 是正确的
                start = middle + 1
            else:
                end = middle

        return start if start == end else middle

first_bad_version = SolutionOfFirstBadVersion()
# print(first_bad_version.firstBadVersion(6))
# print(first_bad_version.firstBadVersion(7))

from typing import List
class FindPeakElement:
    def isPeak(self, index):
        l = len(self.nums) # 调用时，保证 l 大于 1
        if index == 0:
            # 第一个元素，只要判断是否大于下一个就可以了
            return self.nums[0] > self.nums[1]
        if index == l - 1:
            return self.nums[index] > self.nums[index - 1]
        return self.nums[index] > self.nums[index - 1] and self.nums[index] > self.nums[index + 1]


    def findPeakElement(self, nums: List[int]) -> int:
        l = len(nums)
        self.nums = nums
        
        if l == 0:
            return -1
        if l == 1:
            return 0

        start = 0
        end = l - 1

        while start < end:
            middle = (start + end) >> 1
            if self.isPeak(middle):
                return middle
            else:
                if nums[middle] < nums[middle + 1]:
                    start = middle + 1
                else:
                    end = middle - 1
        return start if start == end else middle 

        
findPeak = FindPeakElement()
# print(findPeak.findPeakElement([1,3]))
# print(findPeak.findPeakElement([1,4,5,6,3]))


class SearchFirstIndex:
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

searchFirstIndex = SearchFirstIndex()
print(searchFirstIndex.searchRange([1,2,2,2,3,4], 7))
print(searchFirstIndex.searchRange([1,2,2,2,3,4], 2))
print(searchFirstIndex.searchRange([1,2,2,2,3,3,4,4,5], 4))
print(searchFirstIndex.searchRange([7, 7], 7))
