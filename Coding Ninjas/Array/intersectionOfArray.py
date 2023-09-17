def intersections(arr1, n, arr2, m) :
    #Your code goes here
    for i in arr1:
        if i in arr2:
            print(i,end=" ")
            arr2.remove(i)
n=int(input())
arr1=[int(i) for i in input().split()] 
m=int(input())
arr2=[int(i) for i in input().split()] 
intersections(arr1,n,arr2,m)