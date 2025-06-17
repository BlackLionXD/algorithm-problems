
def sqrtBinary(num):
    left = 0
    right = num
    while(left<=right):
        mid = (left + right)//2
        if(mid*mid == num):
            return mid
        elif(mid*mid<num):
            left = mid + 1
            ans = mid
        elif(mid*mid>num):
            right = mid - 1
    return ans  



num = 10
print(sqrtBinary(num))
