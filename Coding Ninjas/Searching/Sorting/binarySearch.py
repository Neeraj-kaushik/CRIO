def binary(nums,target):
    s=0
    e=len(nums)-1
    while s<=e:
        m=(s+e)//2
        if nums[m]==target:
            return True
        elif nums[m]<target:
            s=m+1
        else:
            e=m-1
    return False

n=int(input())
arr=[int(i)for i in input().split()]
if binary(arr,n):
    print("true")
else:
    print("false")