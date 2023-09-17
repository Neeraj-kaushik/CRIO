def findTriplet(arr, n, x) :
    numTriplets = 0 
    for i in range(n) : 
        for j in range((i + 1), n) :
            for k in range((j + 1), n) : 
                if (arr[i] + arr[j] + arr[k]) == x :
                    numTriplets += 1 
    return numTriplets 

n=int(input())
x=int(input())
arr=[int(i) for i in input().split()]
print(findTriplet(arr,n,x))