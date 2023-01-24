def corresponding_parenthesis(str):
    abertos = str.count("(")
    fechados = str.count(")")
    total = abertos - fechados
    result = ""
    parenteses = ""

    if total > 0:
        parenteses = ")"
        result += parenteses * abs(total)
    else:
        parenteses = "("
        result += parenteses * abs(total)

    return result


print(corresponding_parenthesis("()()"))
print(corresponding_parenthesis("()))"))
print(corresponding_parenthesis(")))((((("))


def remove_more_than_two_repetitions(str):
    result = str[:2]

    for char in str[2:]:
        if result[-1] != char or result[-2] != char:
            result += char

    return result


print(remove_more_than_two_repetitions(
    "Ollloco meuuuu, taaa peegaando fogoo biiiiichooo")
)
