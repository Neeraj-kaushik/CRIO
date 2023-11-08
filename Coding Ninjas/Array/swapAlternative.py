def swapAlternative(arr,n):
    for i in range(0, (n - 1), 2) :
        temp = arr[i]
        arr[i] = arr[i + 1]
        arr[i + 1] = temp
    return arr 
n=int(input())
li=[int(i) for i in input().split()]
ans=swapAlternative(li,n)
for i in ans:
    print(i,end=" ")