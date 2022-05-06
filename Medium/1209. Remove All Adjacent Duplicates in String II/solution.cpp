class Solution {
public:
    string removeDuplicates(string s, int k) {
        stack <char> st;
        stack <int> cc;
        int i = 1, count = 1;


        st.push(s[0]);

        while (i < s.size()) {
            //different or empty
            if (st.empty() || s[i] == st.top()) {
                count++;
                //enough continuous characters
                if (count == k) {
                    for (int j = 0; j < k-1; j++) {
                        st.pop();
                    }
                    if (cc.empty()) {
                        count = 0;
                    }
                    else {
                        count = cc.top();
                        cc.pop();
                    }
                }
                else {
                    st.push(s[i]);
                }
            }
            else {
                st.push(s[i]);
                cc.push(count);
                count = 1;
            }

            i++;
        }

        string res = "";
        while (!st.empty()) {
            res = st.top() + res;
            st.pop();
        }
        return res;
    }
};