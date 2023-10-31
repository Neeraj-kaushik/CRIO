# pattern is
# ABCD
# BCDE
# CDEF
# DEFG

n=int(input())
for i in range(1,n+1):
    for j in range(1,n+1):
        print(chr(64+i+j-1), end="")
    print()