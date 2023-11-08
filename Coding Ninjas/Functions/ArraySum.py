def arraySum(n,li):
    sum1=0
    for i in li:
        sum1+=i
    return sum1

n=int(input())
li=[int(i) for i in input().split()]
print(arraySum(n,li))
