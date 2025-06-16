

def isPalindrome(num):
    if num < 0:
        return False

    reversed_num = 0
    x = num

    while x > 0:
        last_digit = x % 10
        reversed_num = reversed_num * 10 + last_digit
        x = x // 10

    return reversed_num == num

# Test cases
num1 = 12345
num2 = 12121
print(isPalindrome(num1))  # False
print(isPalindrome(num2))  # True
