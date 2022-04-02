/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = (s) => {
    let i = 0, j = s.length-1;
    while(i<j){
        if (s[i] === s[j]){
            i++;
            j--;
        } 
        else {
            return false;
        }
    }
    return true;
}

var validPalindrome = function(s) {
    let i = 0, j = s.length-1,
        worked = true;
    
    //find the breaking point
    while(i<j){
        if (s[i] === s[j]){
            i++;
            j--;
        } 
        else {
            worked = false;
            break;
        }
    }
    if (worked) return true;
    
    // test delete left
    let temp = s.slice(0,i)+s.slice(i+1,s.length);
    if (isPalindrome(temp)) return true;
    
    // test delete right
    temp = s.slice(0,j)+s.slice(j+1,s.length);
    if (isPalindrome(temp)) return true;
    
    // if not both then false
    return false;
};