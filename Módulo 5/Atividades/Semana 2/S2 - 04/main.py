class Villager:
    def __init__(self, name: str) -> None:
        self.name = name
        self.health = 50
        self.defense = 0
        self.attack = 0
        self.is_alive = True

    def check_health(self, incoming_attack_value: int):
        if incoming_attack_value <= self.defense:
            return self.health

        self.health -= (incoming_attack_value - self.defense)

        if self.health <= 0:
            self.health = 0
            self.is_alive = False
            return (self.is_alive, "Target is dead!")

        return self.health

    def normal_attack(self, target):
        return target.check_health(self.attack)


class Mage(Villager):
    def __init__(self, name):
        super().__init__(name)
        self.attack = 10
        self.mana = 100

    def fire_ball(self, target):
        if self.mana < 20:
            return (False, "Not enough mana!")

        self.mana -= 20

        return target.check_health((self.attack + 20))


if __name__ == "__main__":
    villager = Villager("Villager")
    mage = Mage("Mage")

    print(
        "*" * 50,
        "Esperado: {'name': 'Villager', 'health': 50, 'defense': 0, 'attack': 0, 'is_alive': True}",
        f"Resultado: {vars(villager)}",
        "*" * 50,
        sep="\n"
    )

    print(
        "*" * 50,
        "Esperado: {'name': 'Mage', 'health': 50, 'defense': 0, 'attack': 10, 'is_alive': True, 'mana': 100}",
        f"Resultado: {vars(mage)}",
        "*" * 50,
        sep="\n"
    )

    battle_result = mage.fire_ball(villager)

    print(
        "*" * 50,
        "Esperado: 20",
        f"Resultado: {battle_result}",
        "*" * 50,
        sep="\n"
    )

    print(
        "*" * 50,
        "Esperado: {'name': 'Villager', 'health': 20, 'defense': 0, 'attack': 0, 'is_alive': True}",
        f"Resultado: {vars(villager)}",
        "*" * 50,
        sep="\n"
    )

    print(
        "*" * 50,
        "Esperado: {'name': 'Mage', 'health': 50, 'defense': 0, 'attack': 10, 'is_alive': True, 'mana': 80}",
        f"Resultado: {vars(mage)}",
        "*" * 50,
        sep="\n"
    )

    battle_result = mage.normal_attack(villager)

    print(
        "*" * 50,
        "Esperado: 10",
        f"Resultado: {battle_result}",
        "*" * 50,
        sep="\n"
    )

    print(
        "*" * 50,
        "Esperado: {'name': 'Villager', 'health': 10, 'defense': 0, 'attack': 0, 'is_alive': True}",
        f"Resultado: {vars(villager)}",
        "*" * 50,
        sep="\n"
    )

    print(
        "*" * 50,
        "Esperado: {'name': 'Mage', 'health': 50, 'defense': 0, 'attack': 10, 'is_alive': True, 'mana': 80}",
        f"Resultado: {vars(mage)}",
        "*" * 50,
        sep="\n"
    )

    battle_result = mage.fire_ball(villager)

    print(
        "*" * 50,
        f"Esperado: {(False, 'Target is dead!')}",
        f"Resultado: {battle_result}",
        "*" * 50,
        sep="\n"
    )

    print(
        "*" * 50,
        "Esperado: {'name': 'Villager', 'health': 0, 'defense': 0, 'attack': 0, 'is_alive': False}",
        f"Resultado: {vars(villager)}",
        "*" * 50,
        sep="\n"
    )

    print(
        "*" * 50,
        "Esperado: {'name': 'Mage', 'health': 50, 'defense': 0, 'attack': 10, 'is_alive': True, 'mana': 60}",
        f"Resultado: {vars(mage)}",
        "*" * 50,
        sep="\n"
    )

    battle_result = mage.fire_ball(villager)

    print(
        "*" * 50,
        f"Esperado: {(False, 'Target is dead!')}",
        f"Resultado: {battle_result}",
        "*" * 50,
        sep="\n"
    )

    print(
        "*" * 50,
        f"Esperado: 40",
        f"Resultado: {mage.mana}",
        "*" * 50,
        sep="\n"
    )

    battle_result = mage.fire_ball(villager)
    battle_result = mage.fire_ball(villager)
    battle_result = mage.fire_ball(villager)

    print(
        "*" * 50,
        f"Esperado: {(False, 'Not enough mana!')}",
        f"Resultado: {battle_result}",
        "*" * 50,
        sep="\n"
    )
