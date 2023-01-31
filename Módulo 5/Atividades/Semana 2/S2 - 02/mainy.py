# https://www.codewars.com/kata/53f0f358b9cb376eca001079/train/python

class Ball:
    def __init__(self, ball_type="regular"):
        self.ball_type = ball_type

# https://www.codewars.com/kata/55a144eff5124e546400005a/train/python


class Person:
    def __init__(self, name, age):
        self.info = f"{name}s age is {age}"

# https://www.codewars.com/kata/577bd8d4ae2807c64b00045b


def declare_winner(fighter1, fighter2, first_attacker):
    if fighter1.name is first_attacker:
        fighter = fighter1
        defender = fighter2
    else:
        fighter = fighter2
        defender = fighter1

    while fighter.health > 0 and defender.health > 0:
        defender.health -= fighter.damage_per_attack

        if defender.health <= 0:
            return fighter.name

        fighter.health -= defender.damage_per_attack

        if fighter.health <= 0:
            return defender.name
