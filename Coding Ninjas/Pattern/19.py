# pattern is 
# 1     1
#  2   2
#   3 3
#    4
#   3 3
#  2   2
# 1     1

n=int(input())
for i in range(1,n+1):
    j=1
    while j<=2*n-1:
        if j==i:
            print(i,end="")
            j+=1
        elif j==2*n-i:
            print(i,end="")
            j+=1
        else:
            print(" ",end="")
            j+=1
    print()
for i in range(1,n):
    val=n-i
    val2=n+i
    x=1
    while x<=2*n-1:
        if x==val:
            print(n-i,end="")
            x+=1
        elif x==val2:
            print(n-i,end="")
            x+=1
        else:
            print(" ",end="")
            x+=1
    print()