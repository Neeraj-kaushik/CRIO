def mergeTwoSortedArraysWithoutExtraSpace(a, b):
    # Write your code here.
    for i in range(len(a)):
        for j in range(len(b)):
            if a[i]>b[j]:
                a[i],b[j]=b[j],a[i]
    for i in range(len(b)-1):
        for j in range(i+1,len(b)):
            if b[i]>b[j]:
                b[i],b[j]=b[j],b[i]
                
arr1=[int(i) for i in input().split()]
arr2=[int(i) for i in input().split()]
mergeTwoSortedArraysWithoutExtraSpace(arr1,arr2)
print(arr1,arr2)