def pairSum(arr, n, target):
    count=0
    for i in range(n-1):
        for j in range(i+1,n):
            if arr[i]+arr[j]==target:
                count+=1
    if count==0:
        return -1
    else:
        return count

n=int(input())
arr=[int(i) for i in input().split()]
target=int(input())
print(pairSum(arr,n,target))