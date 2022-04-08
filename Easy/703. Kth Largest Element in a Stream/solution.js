class KthLargest {
private:
    int k;
    priority_queue<int, vector<int>, greater<int> >m;
public:
    KthLargest(int k, vector<int>& nums) {
        this->k = k;
        for (auto num : nums){
            m.push(num);
            if (m.size() > k){
                m.pop();
            }
        }
    }
    
    int add(int val) {
        m.push(val);
        
        if (m.size() > this->k)
            m.pop();

        return m.top();
    }
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * KthLargest* obj = new KthLargest(k, nums);
 * int param_1 = obj->add(val);
 */