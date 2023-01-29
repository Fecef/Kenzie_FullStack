# Faça um Programa que peça as 4 notas bimestrais e mostre a média.
import math


def main():
    # print(calc_average(4, 5, 6, 7))
    # print(convert_meters_to_centimeters(200))
    # print(return_circle_area(4))
    # print(return_square_area(5))
    # print(calc_salary())
    # print(convert_fahrenheit_to_celsius())
    # print(convert_celsius_to_fahrenheit())
    # print(random_calc(2, 4, 0.5))
    # print(calc_imc(1.81))
    # print(calc_imc_2(1.65))
    # print(calc_exceed_weight(80))
    # print(pay_day(60, 178))
    # print(how_many_paint_cant(60))
    print(paint_house_calc(150))
    # print(estimate_download_time(44000, 88))
    # print(average_note(8.6, 5))
    # print(return_triangle(15, 10, 5))
    # print(generate_cupom("Picanha", 4, True))


def calc_average(*args):
    avg = sum(args) / len(args)

    return avg


def convert_meters_to_centimeters(meter):
    cent = meter * 100

    return cent


def return_circle_area(radius):
    area = 3.14 * (radius ** 2)

    return area


def return_square_area(lenght):
    area = {"area": lenght**2, "double_area": (lenght**2) * 2}

    return area


def calc_salary():
    honorary = int(input("Salário por hora: "))
    total_hour_mouth = int(input("Total de horas no mês: "))
    salary = honorary * total_hour_mouth

    return salary


def convert_fahrenheit_to_celsius():
    temp = int(input("Temperatura em Fahrenheit: "))
    celsius = 5 * ((temp - 32) / 9)

    return celsius


def convert_celsius_to_fahrenheit():
    temp = int(input("Temperatura em Celsius: "))
    fahrenheit = temp * 1.8 + 32

    return fahrenheit


def random_calc(int_1, int_2, real):
    result_1 = (int_1 * 2) + (int_2 // 2)
    result_2 = (int_1 * 3) + real
    result_3 = real ** 3

    return result_1, result_2, result_3


def calc_imc(height):
    imc = round((72.7 * height) - 58)

    return imc


def calc_imc_2(height):
    imc = {
        "man": round(((72.2 * height) - 58), 2),
        "woman": round(((62.1 * height) - 44.7), 2)
    }

    return imc


def calc_exceed_weight(weight):
    exceed = weight - 50

    return f"""
    Limite de peso excedido({exceed}kg).
    Valor da multa: R$ {(exceed * 4):.2f}
    """


def pay_day(honorary, total_hour_mouth):
    salary = honorary * total_hour_mouth
    ir = salary * 0.05
    inss = salary * 0.1
    fgts = salary * 0.11
    tax_total = ir + inss + fgts
    salary_liquid = salary - tax_total

    if salary <= 900:
        print("Isento")
    elif salary <= 1500:
        salary * 0.05
    elif salary <= 2500:
        salary * 0.1
    elif salary > 2500:
        salary * 0.2

    return f"""
    Salário Bruto:                                    : R$ {salary}
    (-) IR (5%)                                       : R$ {ir}
    (-) INSS (10%)                                    : R$ {inss}
    FGTS (11%)                                        : R$ {fgts}
    Total de descontos                                : R$ {tax_total}
    Salário Liquido                                   : R$ {salary_liquid}
    """


def how_many_paint_cant(area):
    litros_total = area / 3
    cans_total = litros_total / 18
    cost_total = cans_total * 80

    return f"""
    Total cans: {cans_total:.0f}
    Total cost: {cost_total:.2f}
    """


def paint_house_calc(area):
    litros_total = area / 6

    gals_total = math.ceil(litros_total / 3.6)
    gals_cost_total = gals_total * 25

    cans_total = math.ceil(litros_total / 18)
    cans_cost_total = cans_total * 80

    return f"""
    Latas de Tinta
    {"-" * 50}
    Qtde: {cans_total}
    Preço:  R$ {cans_cost_total:.2f}

    Galões de Tinta
    {"-" * 50}
    Qtde: {gals_total}
    Preço: R$ {gals_cost_total:.2f}
    """


def estimate_download_time(size_mbps, speed):
    speed_kbps = speed / 8
    second = size_mbps / speed_kbps

    hour = 0
    minute = 0

    print(second)
    if second > 3600:
        hour = second / 3600
        minute = ((hour - math.floor(hour)) * 100) * 0.6
        second = ((minute - math.floor(minute)) * 100) * 0.6

    if second >= 60:
        minute = second / 60
        second = ((minute - math.floor(minute)) * 100) * 0.6

    return f"Estimativa: {math.floor(hour)}h {math.floor(minute)}m {math.floor(second)}s."


def average_note(note_1, note_2):
    avg = (note_1 + note_2) / 2
    concept = ""

    if avg >= 9:
        concept = "A"
    elif avg >= 7.5 and avg < 9:
        concept = "B"
    elif avg >= 6 and avg < 7.5:
        concept = "C"
    elif avg >= 4 and avg < 6:
        concept = "D"
    else:
        concept = "E"

    return f"Conceito: {concept}"


def return_triangle(side_1, side_2, side_3):
    if side_1 == side_2 and side_2 == side_3:
        return "Triângulo Equilátero"

    elif side_1 != side_2 and side_2 != side_3 and side_3 != side_1:
        return "Triângulo Escaleno"

    else:
        return "Triângulo Isósceles"


def generate_cupom(meat_type, meat_qnt, card):
    table = {
        "File Duplo": 4.9,
        "Alcantra": 5.9,
        "Picanha": 6.9
    }
    total = 0
    price = table.get(meat_type)

    if meat_qnt > 5:
        total = (price + 0.9) * meat_qnt

    total = price * meat_qnt

    return f"""
    Tipo: {meat_type}
    Quantidade: {meat_qnt}
    Total a Pagar: R$ {total:.2f}
    Cartão Tabajara: {card}
    Desconto: R$ {total * 0.05:.2f}
    Total c/ Desconto: R$ {total * 0.95:.2f}
    """


main()
