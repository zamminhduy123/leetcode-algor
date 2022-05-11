/**
 * @param {number} n
 * @return {number}
 */
var countVowelStrings = function(n) {
    const vowels = ['a','e','i','o','u'];
    
    const count = (n, lastVowel) => {
        if (n == 0){
            return 1;
        }
        const index = vowels.indexOf(lastVowel)
        let sum = 0;
        for (let i = index; i < 5; i++){
            sum += count(n-1,vowels[i]);
        }
        return sum;
    }
    
    let res = 0;
    vowels.forEach((v) => {
        res += count(n-1,v);
    })
    return res;
};