# import pyjokes
# joke=pyjokes.get_joke()
# # print(joke)   
import matplotlib.pyplot as plt

# Data for the population growth
years = list(range(2015, 2025))  # Years from 2015 to 2024
population = [500000, 520000, 540000, 570000, 600000, 630000, 670000, 700000, 740000, 780000]  # Population data

# Create a line plot
plt.figure(figsize=(10, 5))
plt.plot(years, population, marker='o', linestyle='-', color='b')

# Adding titles and labels
plt.title('Population Growth of the City Over 10 Years')
plt.xlabel('Year')
plt.ylabel('Population')
plt.xticks(years)  # Set x-ticks to be the years
plt.grid(True)

# Show the plot
plt.tight_layout()
plt.show()
