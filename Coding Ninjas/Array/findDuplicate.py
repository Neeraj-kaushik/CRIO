def findDuplicate(arr,n):
    li=[]
    for i in arr:
        if i not in li:
            li.append(i)
        else:
            return i 
n=int(input())
arr=[int(i) for i in input().split()]
print(findDuplicate(arr,n))
