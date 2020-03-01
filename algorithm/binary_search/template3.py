from typing import List
class SearchBothIndex:
    def findClosestElements(self, arr: List[int], k: int, x: int) -> List[int]:
        l = len(arr)
        
        if k >= l:
            return arr
        elif k == 0:
            return []
        
        # if x >= arr[-1]:
        #     return arr[l-k+1:]
        # elif x <= arr[0]:
        #     return arr[0:k]
        
        
        start = 0
        end = l - 1
        closestIndex = -1
        
        while start < end:
            middle = (start + end) >> 1
            if arr[middle] == x:
                closestIndex = middle
                break
            elif arr[middle] > x:
                end = middle - 1
            else:
                start = middle + 1
        
        if closestIndex == -1:
            # 没找到相等的值，此时 start 应该等于 end
            closestIndex = start
        
        startIndex = 0 if closestIndex - k + 1 < 0 else closestIndex - k + 1
        endIndex = l - 1 if closestIndex + k - 1 > l else closestIndex + k - 1
        
        result = arr[startIndex:endIndex+1]

        if endIndex - startIndex + 1 == k:
            return result
        print(result)

        # for i in range(0, (endIndex - startIndex + 1) >> 1 + 1):
        for i in range(0, len(result)):
            if len(result) == k:
                return result
            if abs(result[0] - x) > abs(result[-1] - x):
                result.pop(0)
            else:
                result.pop(-1)

searchBothIndex = SearchBothIndex()
print(searchBothIndex.findClosestElements([1,2,3,4, 5], 4,3))
print(searchBothIndex.findClosestElements([1,1,1,10,10,10], 1,9))
print(searchBothIndex.findClosestElements([0,1,2,2,2,3,6,8,8,9], 5,9))
