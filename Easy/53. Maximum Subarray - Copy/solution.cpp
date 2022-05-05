class MyStack {
private:
    queue<int> q1;
public:
    MyStack() {
        
    }
    
    void push(int x) {
        q1.push(x);
    }
    
    int pop() {
        queue<int> tq;
        int temp = q1.front();
        do{
            temp = q1.front();
            q1.pop();
            if (!q1.empty()){
                tq.push(temp);
            }
        } while(!q1.empty());
        while (!tq.empty()){
            int temp = tq.front();
            tq.pop();
            q1.push(temp);
        }
        return temp;
    }
    
    int top() {
        queue<int> tq;
        int temp = q1.front();
        do{
            temp = q1.front();
            q1.pop();
            tq.push(temp);
        } while(!q1.empty());
        while (!tq.empty()){
            int temp = tq.front();
            tq.pop();
            q1.push(temp);
        }
        return temp;
    }
    
    bool empty() {
        return q1.empty();
    }
};

/**
 * Your MyStack object will be instantiated and called as such:
 * MyStack* obj = new MyStack();
 * obj->push(x);
 * int param_2 = obj->pop();
 * int param_3 = obj->top();
 * bool param_4 = obj->empty();
 */