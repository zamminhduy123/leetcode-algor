function coinChange(coins: number[], amount: number): number {
//     coins.sort((a,b) => b-a);
    
//     const res = {min: Number.MAX_VALUE, changed: false};
    
//     const recur = (amount,coinAmount,coins) => { 
//         if (amount == 0){
//             if (coinAmount < res.min) {
//                 res.min = coinAmount;
//                 res.changed = true;
//             }
//             return;
//         }
        
//         for (let i = 0; i < coins.length; i++){
//             if (amount >= coins[i]){
//                 recur(amount-coins[i],coinAmount+1,coins);
//             }
//         }
//     }
//     recur(amount,0,coins);
    
    const table : number[] = [];
    table.length = amount+1;
    table.fill(Number.MAX_VALUE);
    table[0] = 0;
    
    for (let i = 1; i <= amount; i++){
        for (let j = 0; j < coins.length; j++){
            if (coins[j] <= i){
                let subRes : number = table[i-coins[j]];
                if (subRes != Number.MAX_VALUE && subRes+1<table[i])
                    table[i] = subRes+1;
            }
        }
    }
    
    return table[amount]!=Number.MAX_VALUE ? table[amount] : -1;
};
