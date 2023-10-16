# i am going to print the pattern
# 1 2 3 4
# 1 2 3 4 
# 1 2 3 4
# 1 2 3 4
n=int(input())
for i in range(n):
    for j in range(n):
        print(j+1,end=" ")
    print()
