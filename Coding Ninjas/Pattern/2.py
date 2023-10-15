# pattern to be printed is
# 1111
# 2222
# 3333
# 4444

n=int(input())
for i in range(n):
    for j in range(n):
        print(i+1,end=" ")
    print()
