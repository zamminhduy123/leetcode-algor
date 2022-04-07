/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    if (stones.length === 1)
        return stones[0];
    
    let max_2 = -1, max_1 = 0;
    
    while (1) {
        for (let i = 0 ; i < stones.length; i++){
            if (stones[i] > stones[max_1]){
                max_1 = i;
            }
        }

        for (let i = 0 ; i < stones.length; i++){
            if ((max_2 === -1 || stones[i] >= stones[max_2]) && i!==max_1){
                max_2 = i;
            }
        }
        
        if (stones[max_1] === 0 || stones[max_2] === 0)
            break;
        
        stones[max_1] -= stones[max_2];
        stones[max_2] = 0;
    }
    return stones[max_1];
};