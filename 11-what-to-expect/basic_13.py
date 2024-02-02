print("Hello world!")

# for loop in python
# range function
# takes in 3 arguments (start, stop, step)

for i in range(1, 10 + 1, 1):
    print(i)


def print_1_to_255():
    """
    Write a function that
    prints the numbers 1 to 255 in a loop.
    """
    for i in range(1, 256, 1):
        print(i)


print_1_to_255()
