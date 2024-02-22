/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    if (!n) return -1;
    if (n == 1) return 1;
    const inArr = new Array(n).fill(0), out = new Array(n).fill(0);
    let judge = -1;
    for (let i = 0; i < trust.length; i++) {
        inArr[trust[i][1] - 1]++;
        out[trust[i][0] - 1]++;

        if (inArr[trust[i][1] - 1] == n-1) {
            judge = trust[i][1] - 1;
        }
    }
    // console.log(inArr, out, judge);
    return judge !== -1 ? (!out[judge]) ? judge+1 : -1 : -1
};


/**
 * Just draw this out paper as directional graph. U will see the solution paint out
 */