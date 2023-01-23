# Delta
def delta(a, b, c):
    return (b**2) - 4*(a*c)


# Bhaskara
def bhaskara(a, b, c):
    delta_result = delta(a, b, c)
    delta_square = delta_result ** 0.5

    x1 = (-b + delta_square) / (2*a)
    x2 = (-b - delta_square) / (2*a)

    if delta_result < 0:
        return "Delta Negativo"
    elif delta_result >= 0:
        return (round(x1, 2), round(x2, 2))


print(bhaskara(7, 3, 4))
print(bhaskara(1, 5, 2))
print(bhaskara(3, 10, 2))
