def reverseStringWordWise(string):
    arr=string.split(" ")
    arr=arr[::-1]
    str1=" ".join(arr)
    return str1




string = input()
ans = reverseStringWordWise(string)
print(ans)