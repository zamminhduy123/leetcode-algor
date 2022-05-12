# Thought Process

## Bruteforce backtracking O(N^2)

for each index in 1 solution we just for loop all the number in nums and check if we visited that number, if haven't we use it then check visited = true, else not. Backtracking happen is when u get out the recursion, we check visited = false again

Solution is simple: 

start with index = 0
- For loop each index, check visited, use it in current permutation
- index reach end, push in a SET to filter out duplicates
- backtracking check visted = false

## Still bruteforce but already remove duplicate
### I don't know what complexity of this is but it went from 600ms average to 10ms =))

After checking the disccusion, i saw a guy use an image to describe his thought using tree to show the solution is smart. 

And after seeing his picture, i realize that i can optimize this better by simply backtracking but use the unique element each time we at some index, if the freq of that el > 0 then we use it and decrease it, backtracking happen when after recursion we increase the freq in the map back

