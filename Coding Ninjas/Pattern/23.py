# pattern is 
# 12344321
# 123**321
# 12****21
# 1******1
n=int(input())
val=0
for i in range(1,n+1):
    x=1
    while x<=n-i+1:
        print(x,end="")
        x+=1
    if i==1:
        pass
    else:
        x=i+val
        while x!=0:
            print("*",end="")
            x-=1
        val+=1
    x=n-i+1
    t=n+i
    while t<=2*n:
        print(x,end="")
        x-=1
        t+=1
    print()