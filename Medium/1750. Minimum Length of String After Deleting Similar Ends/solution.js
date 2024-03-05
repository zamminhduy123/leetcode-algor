/**
 * @param {string} s
 * @return {number}
 */


//Two pointer solution
var minimumLength = function(s) {
    let i = 0, j = s.length - 1;

    if (s[i] != s[j]) return s.length;

    let moved = true;
    while (moved && i < j) {
        moved = false;
        if (s[i] == s[j]) {
            if (s[i] == s[i+1]) {
                i++;
                moved = true;
            }
            if (s[j] == s[j-1]) {
                j--;
                moved = true;
            }
        }
        if (!moved) {
            if (s[i] == s[j]) {
                i++;
                j--;
                moved = true;
            } else {
                break;
            }
        }
    }

    if (i == j && s[i-1] == s[j+1] && s[i-1] == s[j]) {
        return 0;
    }
    return j-i+1;
};