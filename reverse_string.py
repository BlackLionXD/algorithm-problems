def reverse_string(input_string: str) -> str:
    result=''
    for i in range(len(input_string)-1,-1, -1):
        result += input_string[i]
    return result
def rev_string(s:str) ->str:
    result = s[::-1]
    return result

print(reverse_string("hello"))
print(rev_string("hello"))
