# pattern is 
# 4555
# 3455
# 2345
# 1234

n=int(input())
for i in range(1,n+1):
    val=n-i+1
    x=1
    while x<=i:
        print(val,end="")
        val+=1
        x+=1
    x=i+1
    while x<=n:
        print("5",end="")
        x+=1
    print()