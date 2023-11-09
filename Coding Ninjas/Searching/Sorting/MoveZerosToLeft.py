def moveZerosToLeft(arr, n):
    # Write your code here
    i=n-1
    for j in reversed(range(n)):
        if arr[j]!=0:
            t=arr[j]
            arr[j]=arr[i]
            arr[i]=t
            i-=1
    return arr

n=int(input())
arr=[int(i) for i in input().split()]
print(moveZerosToLeft(arr,n))