
def two_sum(nums,target):
    for i in range(len(nums)):
        for j in range(i+1,len(nums)):
            if nums[i]+ nums[j] == target:
                return [i , j]
   
num = [1,2,3,4,5]
t = 9
print(two_sum(num,t))
