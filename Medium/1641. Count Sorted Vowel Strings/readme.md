# Thought Process

Simply follow the problem hints

## hint 1
For each character, its possible values will depend on the value of its previous character, because it needs to be not smaller than it.

## hint 2
Think backtracking. Build a recursive function count(n, last_character) that counts the number of valid strings of length n and whose first characters are not less than last_character.

## hint 3
In this recursive function, iterate on the possible characters for the first character, which will be all the vowels not less than last_character, and for each possible value c, increase the answer by count(n-1, c).