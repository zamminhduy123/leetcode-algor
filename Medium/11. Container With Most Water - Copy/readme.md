## Thought Process

This problem is not really hard since i learned about Iterator in school. And the main problem i need to solve is just trying to understand how the old Iterator works to implement the PeekingIterator.

For the peek method, i simple cache the iterator.next() and serve it if they call next. if the cache empty, serve it regular like normal iterator