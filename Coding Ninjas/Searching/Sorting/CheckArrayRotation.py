def arrayRotation(arr,n):
    for i in range(n-1):
        if arr[i]>arr[i+1]:
            return i+1
        

n=int(input())
arr=[int(i) for i in input().split()]
print(arrayRotation(arr,n))