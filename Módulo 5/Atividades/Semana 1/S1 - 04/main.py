# https://www.codewars.com/kata/57e76bc428d6fbc2d500036d/train/python

def string_to_array(s):
    result = s.split(" ")

    return result

# https://www.codewars.com/kata/5966e33c4e686b508700002d/train/python


def sum_str(a, b):
    result = str(int(a or 0) + int(b or 0))

    return result

# https://www.codewars.com/kata/55a70521798b14d4750000a4/train/python


def greet(name):
    return f"Hello, {name} how are you doing today?"

# https://www.codewars.com/kata/57fae964d80daa229d000126/train/python


def remove(s):
    print(s)

    if not s.endswith("!"):
        return s

    return s[:-1]


# https://www.codewars.com/kata/51c8991dee245d7ddf00000e/train/python


def reverse_words(s):
    s_array = s.split(" ")
    s = s_array[::-1]
    result = " ".join(s_array)

    return result


# https://www.codewars.com/kata/57a0e5c372292dd76d000d7e/train/python


def repeat_str(repeat, string):
    return repeat * string


# https://www.codewars.com/kata/597bb84522bc93b71e00007e/train/python

def string_merge(string1, string2, letter):
    i1 = string1.find(letter)
    i2 = string2.find(letter)

    result = string1[:i1] + string2[i2:]

    return result

# https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d/train/python


def solution(text, ending):
    return text.endswith(ending)


# https://www.codewars.com/kata/5803a6d8db07c59fff00015f/train/python

def starts_with(st, prefix):
    return st.startswith(prefix)

# https://www.codewars.com/kata/5859c82bd41fc6207900007a/train/python


def quotable(name, quote):
    return f"{name} said: \"{quote}\""


# https://www.codewars.com/kata/51c89385ee245d7ddf000001/train/python

def solution(value):
    return f"Value is {value:05}"

# https://www.codewars.com/kata/5208fc3cb613bc725f000142/train/python


def solution(st, limit):

    if len(st) <= limit:
        return st

    return st[:limit] + "..."
