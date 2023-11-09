def selectionSort(arr,n):
    for i in range(n):
        min1=i
        for j in range(i+1,n):
            if arr[j]<arr[min1]:
                arr[j],arr[min1]=arr[min1],arr[j]
    return arr

n=int(input())
li=[int(i) for i in input().split()]
print(selectionSort(li,n))