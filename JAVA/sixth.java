
//create 2 instance of the same class and initialize these values using constructor.Display all these by usingh the display function in the employee class 
//WAP TO CREATE A CLASS STUDENGT HAVING 3 ATTRIBUTES AS NAME ,ID AND MARKS .CREATE 1 DEFAULT CONSTRUCTOR AND 2 PARAMETERIZED CONSTRUCTOR TO INITIALIZE THE VARIABLE FOR THIS CLASS .FOR THIS CLASS CREATE 3 DIFF INSTANCEWS /OBJECTS BY CALLING DIFFERENT CONSTRUCTORS
class Student:
    def __init__(self, name=None, ID=None, marks=None):
        if name is None and ID is None and marks is None:
            # Default constructor
            self.name = ""
            self.ID = 0
            self.marks = 0
        elif marks is None:
            # Parameterized constructor with 2 parameters
            self.name = name
            self.ID = ID
            self.marks = 0
        else:
            # Parameterized constructor with 3 parameters
            self.name = name
            self.ID = ID
            self.marks = marks

    def display(self):
        return f"Name: {self.name}, ID: {self.ID}, Marks: {self.marks}"

# Creating three different instances/objects of the Student class

# Using default constructor
student1 = Student()

# Using parameterized constructor with 2 parameters
student2 = Student("Alice", 101)

# Using parameterized constructor with 3 parameters
student3 = Student("Bob", 102, 95)

# Displaying the details of the students
print(student1.display())  # Output: Name: , ID: 0, Marks: 0
print(student2.display())  # Output: Name: Alice, ID: 101, Marks: 0
print(student3.display())  # Output: Name: Bob, ID: 102, Marks: 95
]//
/


//wap to create an abstract class SHAPE  having 2 abstract fxns calculating area and parameter .create three sublasses   as circle triangle and square which implements this abstract class fxn

