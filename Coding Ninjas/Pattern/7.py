# pattern is
# 1
# 12
# 123
# 1234

n=int(input())
for i in range(1,n+1):
    for j in range(i):
        print(j+1,end=" ")
    print()