# pattern is 
#    1
#   121
#  12321
# 1234321

n=int(input())
for i in range(1,n+1):
    space=1
    while space<=n-i:
        print(" ",end="")
        space+=1
    num=1
    while num<=i:
        print(num,end="")
        num+=1
    num=i-1
    while num>=1:
        print(num,end="")
        num-=1
    print()