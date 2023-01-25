def sum_numbers(*args):
    return sum(args)


numbers = [1, 2, 3, 4, 5, 6]

result = sum_numbers(*numbers)
print(result)


def get_multiplied_amount(multiplier, *args):
    total = sum([i * multiplier for i in args])

    return total


numbers = [1, 2, 3]
multiplier = 2

result = get_multiplied_amount(multiplier, *numbers)
print(result)


def word_concatenator(*args):
    total = " ".join(args)

    return total.strip()


words = ["Tá", "pegando", "fogo", "bicho!!!"]
concatenated_words = word_concatenator(*words)
print(concatenated_words)


def inverted_word_factory(*args):
    inverted_array = list(reversed(args))
    inverted_array_string = [i[::-1] for i in inverted_array]
    inverted_string = " ".join(inverted_array_string)

    return inverted_string


words = ["eae", "amigão", "belezinha?"]

inverted_words = inverted_word_factory(*words)
print(inverted_words)


def dictionary_separator(**kwargs):
    list_keys = kwargs.keys()
    list_values = kwargs.values()

    return (list_keys, list_values)


user = {"name": "Naruto", "age": 16, "favorite word": "Ichiraku Ramen"}

items = dictionary_separator(**user)
print(type(items))
print(items[0])
print(items[1])


def dictionary_creator(*args, **kwargs):

    if len(args) < len(kwargs):
        return None

    dict_complete = dict(zip(args, kwargs.values()))

    return dict_complete


change_keys = ["username", "password", "address"]
user = {"name": "Williams", "some_key": "1234"}

modified_user = dictionary_creator(*change_keys, **user)
print(modified_user)


def purchase_logger(**kwargs):
    name = kwargs.get("name")
    price = kwargs.get("washing powder")
    quantity = kwargs.get("quantity")

    return f"{quantity} {name} {price}"


purchase = {"name": "washing powder", "price": 6.7, "quantity": 4}

purchase_log = purchase_logger(**purchase)
print(purchase_log)


def world_cup_logger(country, *args):
    copas = sorted(args)
    message = ""

    for index, char in enumerate(copas):
        message += str(char)

        if index == (len(copas) - 2):
            message += " e "
        elif index == (len(copas) - 1):
            message += "."
        else:
            message += ", "

    return f"{country} - {message}"


country = 'Alemanha'
year_list = [2014, 1990, 1974, 1954]

log = world_cup_logger(country, *year_list)
print(log)
