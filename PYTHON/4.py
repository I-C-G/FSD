# def replace_empty_strings_with_for_loop(my_list):
#     for i in range(len(my_list)):
#         if not my_list[i]:
#             my_list[i] = ""
#     return my_list

# # Example usage:
# my_list = ["apple", "", "banana", "", "cherry"]
# new_list = replace_empty_strings_with_for_loop(my_list)
# print(new_list)  # Output: ['apple', '', 'banana', '', 'cherry']
def calculate_sum_and_average(numbers):

    total_sum = sum(numbers)
    average = total_sum / len(numbers)
    return total_sum, average

# Example usage:
my_list = [10, 20, 30, 40, 50]
sum, avg = calculate_sum_and_average(my_list)k
print("Sum:", sum)
print("Average:", avg)
