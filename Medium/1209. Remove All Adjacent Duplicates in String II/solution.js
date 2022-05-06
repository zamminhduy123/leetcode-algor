/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */

//very bad solution cost O(n * Array.slice()) time
var removeDuplicates = function(s, k) {
    let count = 1, tempString = s;
    for (let i = 0 ; i < tempString.length-1; i++){
        if (tempString[i] === tempString[i+1]){
            count++;
            if (count === k){
                
                if (i+2 < tempString.length) 
                    tempString = tempString.slice(0,i-k+2) + tempString.slice(i+2,tempString.length);
                else 
                    tempString = tempString.slice(0,i-k+2);
                
                i = -1;
                count = 1;                                                        
            }
        } else {
            count = 1;
        }
    }
    return tempString;
};