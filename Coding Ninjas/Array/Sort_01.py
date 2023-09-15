def sortZeroesAndOne(arr, n) : 
    nextZero = 0 
    for i in range(n) : 
        if arr[i] == 0 :
            temp = arr[nextZero] 
            arr[nextZero] = arr[i]
            arr[i] = temp 
            nextZero += 1 
n=int(input())
arr=[int(i) for i in input().split()]
sortZeroesAndOne(arr,n)
print(arr)