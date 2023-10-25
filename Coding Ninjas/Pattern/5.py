# pattern is 
# 1 2 3 4
# 2 3 4 5
# 3 4 5 6
# 4 5 6 7
n=int(input())
for i in range(n):
    for j in range(n):
        print(i+j+1,end=" ")
    print()