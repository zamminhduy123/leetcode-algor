/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
 var numsSameConsecDiff = function(n, k) {
    //SOL 1: I BET IT'S O((9.REPEAT(N) - 1.REPEAT(N)) * K) =))) IT'S BAD I MEAN :)))

     /*   const res = [];
        let start = '1';
        
        for (i = +(start+'0'.repeat(n-1)); i <= +'9'.repeat(n); i++) {
            const number = i.toString();
            for (let j = 1; j < number.length; j++){
                if (Math.abs(number[j] - number[j-1]) != k) {
                    break;
                }
                if (j === number.length-1){
                    res.push(+number)
                }
            }
        }
             
        return res; */

        // SOL 2: DFS
        
        const res = [];
        
        const temp = new Array(n);
        
        const dfs = (temp, idx) => {
            if (idx === temp.length){
                res.push(+temp.join(''));
                return;
            }
            for (let i = 0; i <= 9; i++){
                if (idx === 0 && i == 0){
                    continue;
                }
                if (idx === 0){
                    temp[idx] = i;
                    dfs(temp,idx+1);
                }
                else {
                    if (Math.abs(temp[idx - 1] - i) == k){
                        temp[idx] = i;
                        dfs(temp,idx+1);
                    }
                } 
            }
        }
        
        dfs(temp,0);
        
        return res;
    };