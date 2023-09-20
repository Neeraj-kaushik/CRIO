# pattern is 
# 1
# 11
# 202
# 3003

n=int(input())
for i in range(1,n+1):
    for j in range(1,i+1):
        if i==1 and j==1:
            print(i,end="")
        elif j==1:
            print(i-1,end="")
        elif j==i:
            print(i-1,end="")
        else:
            print("0",end="")
    print()