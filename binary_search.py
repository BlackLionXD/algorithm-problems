def binarySearch(num, x):
    left = 0
    right = len(num)-1
    while( left <= right):
        mid = (left + right) //2
        if(num[mid]==x):
            return mid
        elif(num[mid]<x):
            left = mid +1
        else:
            right = mid -1
    return -1






arr = [2, 4,  6, 8, 10, 18, 20, 30, 50, 55]

x = 5

print(binarySearch(arr,x))
