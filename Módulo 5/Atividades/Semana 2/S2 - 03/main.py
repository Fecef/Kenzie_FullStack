# https://www.codewars.com/kata/57a93f93bb9944516d0000c1/train/python

class Dictionary:
    def __init__(self):
        self.dictionary = {}

    def newentry(self, word, definition):
        self.dictionary[word] = definition

    def look(self, key):
        return self.dictionary.get(key, f"Can't find entry for {key}")


# https://www.codewars.com/kata/55c0ac142326fdf18d0000af/train/python

class Cube:
    def __init__(self, __side=0):
        self.__side = __side

    def get_side(self):
        return abs(self.__side)

    def set_side(self, new_side):
        self.__side = new_side

# https://www.codewars.com/kata/568018a64f35f0c613000054/train/python


class Guesser:
    def __init__(self, number, lives):
        self.number = number
        self.lives = lives

    def guess(self, n):
        if self.lives <= 0:
            raise Exception("Omae wa mo shindeiru")

        if n != self.number:
            self.lives -= 1
            return False

        return True


# https://www.codewars.com/kata/563089b9b7be03472d00002b/train/python

class List:
    def remove_(self, integer_list, values_list):
        return [n for n in integer_list if n not in values_list]

# https://www.codewars.com/kata/56311e4fdd811616810000ce/train/python


class List:
    def count_spec_digits(self, integers_list, digits_list):
        string_integers = "".join(str(i) for i in integers_list)

        return [(i, string_integers.count(str(i))) for i in digits_list]


# https://www.codewars.com/kata/6089c7992df556001253ba7d/train/python

class Song:
    def __init__(self, title, artist):
        self.title = title
        self.artist = artist
        self.list_listners = []

    def how_many(self, listners):
        new_listners = [i.upper()
                        for i in listners if not i.upper() in self.list_listners]
        self.list_listners += new_listners

        return len(list(set(new_listners)))

# https://www.codewars.com/kata/5a03af9606d5b65ff7000009/train/python


class User:
    def __init__(self, name, balance, checking_account):
        self.name = name
        self.balance = balance
        self.checking_account = checking_account

    def withdraw(self, c):
        if self.balance < c:
            raise ValueError(f"{self.name} doesn't have enough money.")

        self.balance -= c

        return f"{self.name} has {self.balance}."

    def check(self, acc_name, acc_discount):
        if not acc_name.checking_account:
            raise ValueError(f"{acc_name} checking account is disabled.")

        if acc_name.balance < acc_discount:
            raise ValueError(
                f"{acc_name.name} can't withdraw {acc_discount}, he only has {acc_name.balance}.")

        self.balance += acc_discount
        acc_name.balance -= acc_discount

        return f"{self.name} has {self.balance} and {acc_name.name} has { acc_name.balance}."

    def add_cash(self, c):
        self.balance += c

        return f"{self.name} has {self.balance}."

# https://www.codewars.com/kata/52eb114b2d55f0e69800078d/train/python


class Cipher(object):
    def __init__(self, map1, map2):
        self.encode = lambda s: s.translate(str.maketrans(map1, map2))
        self.decode = lambda s: s.translate(str.maketrans(map2, map1))
