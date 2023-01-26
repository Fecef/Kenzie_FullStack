def div_by_zero():
    a = 1
    b = 0

    try:
        return a / b
    except ZeroDivisionError:
        print("É impossível divir um número por zero.")


def unexisting_key():
    my_dict = {"name": "Alex", "module": "M5"}

    try:
        return my_dict["address"]
    except KeyError:
        print("A key específicada não existe.")


def unexisting_index():
    my_list = [0, 1]
    try:
        return my_list[5]
    except IndexError:
        print("A lista do index está fora de alcance.")


def misterious_error():
    a = 5
    try:
        return a.capitalize()
    except AttributeError:
        print("Objeto 'int' não possui atributo de 'capitalize'")


if __name__ == "__main__":
    div_by_zero()
    unexisting_key()
    unexisting_index()
    misterious_error()
