/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
    let scores = [], sum = 0;
    for (let i = 0 ; i < ops.length; i++) {
        const temp = parseInt(ops[i]);
        if (temp){
            scores.push(temp);
            sum += temp;
        } else if (ops[i] === 'C'){
            sum -= scores[scores.length-1];
            scores.pop();
        } else if (ops[i] === 'D'){
            let newScore = scores[scores.length-1]*2
            scores.push(newScore)
            sum += newScore
        } else {
            let newScore = scores[scores.length-1]+scores[scores.length-2]
            scores.push(newScore)
            sum += newScore
        }
    }
    return sum;
};