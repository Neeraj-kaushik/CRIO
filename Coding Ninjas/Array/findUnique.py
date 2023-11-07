def findUnique(arr,n):
    for i in range(n) :
        j = 0
        while j < n :
            if i != j :
                if arr[i] == arr[j] :
                    break
            j += 1
        if j == n : 
            return arr[i]
n=int(input())
arr=[int(i) for i in input().split()]
print(findUnique(arr,n))