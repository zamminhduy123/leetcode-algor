/**
 * @param {number[]} nums
 * @return {number}
 */

// Stack Solution: O(n) time and O(n) space
class Solution {
public:
    bool backspaceCompare(string s, string t) {
        stack <char> ss,st;
        int i = 0; 
        while (i < s.size() || i < t.size()){
            if (i < s.size()) {
                if (s[i] != '#'){
                    ss.push(s[i]);
                } else if (!ss.empty()) {
                    ss.pop();
                }
            }
            
            if (i < t.size()){
                if (t[i] != '#'){
                    st.push(t[i]);
                } else if (!st.empty()) {
                    st.pop();
                }
            }
            i++;
        }
        
        
        if (st.size() != ss.size()){
            return false;
        } else {
            while (!st.empty()){
                if (st.top() != ss.top()){
                    return false;
                }
                st.pop();
                ss.pop();
            }
        }
        return true;
    }
};

//Kadane: O(n) time and O(1) space
/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isWord = (c) =>{
    return c != '#';
}
var backspaceCompare = function(s, t) {
    let sBack = 0,tBack = 0, i = s.length -1, j = t.length - 1;
    
    while (i >= 0 || j >=0){
        let sReadyCompare = false;
        if (isWord(s[i])){
            if (sBack > 0){
                i--;
                sBack--;
            } else {
                sReadyCompare = true;
            }
        } else {
            sBack++;
            i--;
        }
        if (isWord(t[j])){
            if (tBack > 0){
                j--;
                tBack--;
            } else {
                if (sReadyCompare){
                    if (s[i] != t[j]) return false;
                    i--;
                    j--;
                }
            }
        } else {
            tBack++;
            j--;
        }
    }
    
    return (i < 0 && j < 0);
};