# pattern is
# ABCD
# ABCD
# ABCD
# ABCD

n=int(input())
for i in range(1,n+1):
    for j in range(1,n+1):
        print(chr(64+j), end="")
    print()