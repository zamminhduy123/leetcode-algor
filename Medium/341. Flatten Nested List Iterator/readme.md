# Thought Process

Flatten the list out before implement the iterator, i still think this is a question that require inplace iterator.

But i checked multiples discussion, seems like everybody still choose to flatten it first into an array

So to do that, simply:

1. for each element in the list
2. check if that is another list
3. if list then get list and recursion into the function again (back to 1)
4. if not list then simply add to the global array


