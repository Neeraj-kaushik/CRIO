# pattern is
#    *
#   ***
#  *****
# *******

n=int(input())
for i in range(1,n+1):
    s=1
    while s<=n-i:
        print(" ",end="")
        s+=1
    num=1
    while num<=i:
        print("*",end="")
        num+=1
    num=i-1
    while num>=1:
        print("*",end="")
        num-=1
    print()