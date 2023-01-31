class Filme:
    def __init__(self, title: str, duration: int) -> None:
        self.title = title
        self.duration = duration
        self.number_of_exhibitions = 0

    def __repr__(self) -> str:
        return f"Filme: {self.title}"

    def __len__(self) -> int:
        return self.duration

    def __call__(self):
        self.number_of_exhibitions += 1

        return self.number_of_exhibitions


john_wick = Filme("John Wick", 113)

print(john_wick)
print(len(john_wick))
print(john_wick.number_of_exhibitions)
print(vars(john_wick))

john_wick()
print(john_wick.number_of_exhibitions)
print(vars(john_wick))
