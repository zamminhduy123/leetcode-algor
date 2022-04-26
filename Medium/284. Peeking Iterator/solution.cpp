/*
 * Below is the interface for Iterator, which is already defined for you.
 * **DO NOT** modify the interface for Iterator.
 *
 *  class Iterator {
 *		struct Data;
 * 		Data* data;
 *  public:
 *		Iterator(const vector<int>& nums);
 * 		Iterator(const Iterator& iter);
 *
 * 		// Returns the next element in the iteration.
 *		int next();
 *
 *		// Returns true if the iteration has more elements.
 *		bool hasNext() const;
 *	};
 */

class PeekingIterator : public Iterator {
private:
    Iterator *i;
    
    int cache = -1;
public:
	PeekingIterator(const vector<int>& nums) : Iterator(nums) {
	    // Initialize any member here.
	    // **DO NOT** save a copy of nums and manipulate it directly.
	    // You should only use the Iterator interface methods.
	    i = new Iterator(nums);
	}
	
    // Returns the next element in the iteration without advancing the iterator.
	int peek() {
        if (cache == -1){
           cache = i->next();
       }
       
        return cache;
	}
	
	// hasNext() and next() should behave the same as in the Iterator interface.
	// Override them if needed.
	int next() {
	   if (cache != -1){
           int temp = cache;
           cache = -1;
           return temp;
       }
        return i->next();
	}
	
	bool hasNext() const {
	    return i->hasNext() || cache != -1;
	}
};