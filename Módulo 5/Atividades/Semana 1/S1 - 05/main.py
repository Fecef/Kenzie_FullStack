# https://www.hackerrank.com/challenges/python-string-split-and-join/problem?isFullScreen=true

def split_and_join(line):
    a = line.split(" ")
    b = "-".join(a)

    return b

# https://www.hackerrank.com/challenges/whats-your-name/problem?isFullScreen=true


def print_full_name(first, last):
    print(f"Hello {first} {last}! You just delved into python.")

# https://www.hackerrank.com/challenges/python-arithmetic-operators/problem?isFullScreen=true


def arithmetic_operators(a, b):
    print(a + b)
    print(a - b)
    print(a * b)

# https://www.hackerrank.com/challenges/python-print/problem?isFullScreen=true


def print_function(n):
    result = ""

    for i in range(1, n):
        result += str(i + 1)

    return result

# https://www.hackerrank.com/challenges/python-loops/problem?isFullScreen=true


def print_function(n):
    result = ""

    for i in range(n):
        result += str(i + 1)

    print(result)


# https://www.hackerrank.com/challenges/python-loops/problem?isFullScreen=true

def loops(n):
    for i in range(n):
        print(i*i)

# https://www.hackerrank.com/challenges/py-if-else/problem?isFullScreen=true


def if_else(n):
    if n % 2 == 0:
        if n > 20:
            return print("Not Weird")

        if n >= 2 and n <= 5:
            return print("Not Weird")

        if n >= 6 and n < 20:
            return print("Weird")

    return print("Weird")


# https://www.hackerrank.com/challenges/python-division/problem?isFullScreen=true

def divison(a, b):
    print(a//b)
    print(a/b)
