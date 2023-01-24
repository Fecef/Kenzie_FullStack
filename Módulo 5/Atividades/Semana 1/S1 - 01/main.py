import math


# Delta
def delta(a, b, c):
    return (b**2) - 4*(a*c)


# Bhaskara
def bhaskara(a, b, c):
    delta_result = delta(a, b, c)
    delta_square = math.sqrt(delta_result)

    if delta_result < 0:
        return "Delta Negativo"

    x1 = (-b + delta_square) / (2*a)
    x2 = (-b - delta_square) / (2*a)

    return (f"x1={round(x1, 2)}, x2={round(x2, 2)}")


print(bhaskara(7, 3, 4))
print(bhaskara(1, 5, 2))
print(bhaskara(3, 10, 2))
