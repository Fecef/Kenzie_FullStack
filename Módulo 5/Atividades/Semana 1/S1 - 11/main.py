sentence_1 = 'O Rato Rui Gosta De QueiJo FresQuiNho'
sentence_2 = 'o rato rui roeu a roupa do rei de roma'


def list_comprehension_exercise_1() -> list:
    return [number for number in range(11)]


def list_comprehension_exercise_2() -> list:
    return [number for number in range(22) if number % 2 == 0 or number % 3 == 0]


def list_comprehension_exercise_3() -> list:
    return [number for number in range(-3, 32) if not number % 2 == 0 or not number % 5 == 0]


def list_comprehension_exercise_4() -> list:
    return [number * number for number in range(0, 11)]


def list_comprehension_exercise_5(sentence_1) -> list:
    return [char for char in sentence_1 if char.isupper()]


def list_comprehension_exercise_6(sentence_2) -> list:
    return [char for char in sentence_2.split(" ") if char.startswith("r") and len(char) <= 4]


def main():
    print(list_comprehension_exercise_1())
    print(list_comprehension_exercise_2())
    print(list_comprehension_exercise_3())
    print(list_comprehension_exercise_4())
    print(list_comprehension_exercise_5(sentence_1))
    print(list_comprehension_exercise_6(sentence_2))


main()
