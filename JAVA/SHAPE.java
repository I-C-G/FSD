from abc import ABC, abstractmethod
import math

class SHAPE(ABC):
    @abstractmethod
    def calculate_area(self):
        pass
    
    @abstractmethod
    def calculate_perimeter(self):
        pass

class Circle(SHAPE):
    def __init__(self, radius):
        self.radius = radius
    
    def calculate_area(self):
        return math.pi * self.radius ** 2  # Area = πr² [2]
    
    def calculate_perimeter(self):
        return 2 * math.pi * self.radius   # Circumference = 2πr [2]

class Triangle(SHAPE):
    def __init__(self, a, b, c):
        self.a = a
        self.b = b
        self.c = c
    
    def calculate_area(self):
        # Using Heron's formula [2]
        s = (self.a + self.b + self.c) / 2
        return math.sqrt(s * (s - self.a) * (s - self.b) * (s - self.c))
    
    def calculate_perimeter(self):
        return self.a + self.b + self.c    # Sum of all sides [2]

class Square(SHAPE):
    def __init__(self, side):
        self.side = side
    
    def calculate_area(self):
        return self.side ** 2              # Area = side² [2]
    
    def calculate_perimeter(self):
        return 4 * self.side               # Perimeter = 4×side [2]

# Example usage
circle = Circle(5)
triangle = Triangle(3, 4, 5)
square = Square(4)

print(f"Circle: Area={circle.calculate_area():.2f}, Perimeter={circle.calculate_perimeter():.2f}")
print(f"Triangle: Area={triangle.calculate_area()}, Perimeter={triangle.calculate_perimeter()}")
print(f"Square: Area={square.calculate_area()}, Perimeter={square.calculate_perimeter()}")
//wap to create an abstract class animal with an abstract method sound. create 2 diff subclasses to implement sound fxn separately 
//wap to make a simpler calculator to showo the diferent arithmetic operations on 2 innput number  using command line argumnedt 
