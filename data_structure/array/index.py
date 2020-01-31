a = [2,3,1,2,4,5,4]

def duplicate(numbers=[]):
    for i in range(len(numbers)):
        while i != numbers[i]:
            if numbers[i] == numbers[numbers[i]]:
                return numbers[i]
            temp = numbers[i]
            numbers[i] = numbers[temp]
            numbers[temp] = temp

result = duplicate(a)
print(result)
