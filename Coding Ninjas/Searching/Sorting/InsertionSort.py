def insertionSort(n, arr):
    # Write your code here.
    for i in range(1,n):
        min1=arr[i]
        j=i-1
        while j>=0 and min1<arr[j]:
            arr[j+1]=arr[j]
            j=j-1
        arr[j+1]=min1
    return arr

n=int(input())
arr=[int(i) for i in input().split()]
print(insertionSort(n,arr))