# Pattern is 
# 4 3 2 1
# 4 3 2 1
# 4 3 2 1
# 4 3 2 1
n=int(input())
for i in range(n):
    for j in range(n):
        print(n-j, end=" ")
    print()