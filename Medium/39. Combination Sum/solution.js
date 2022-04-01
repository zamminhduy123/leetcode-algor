/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

var recurshit = (candidates,target,index, selected, res) => {
    if (target < 0) {
        return;
    }
    if (candidates[index] === target){
        selected.push(candidates[index]);
        res.push(selected);
    } else if (target > candidates[index]){
        selected.push(candidates[index]);

        for (let i = index; i < candidates.length; i++){
            // change the array so it doesn't take the same array for each iteration
            recurshit(candidates,target - candidates[index],i,[...selected],res);
        }
    }
}
var combinationSum = function(candidates, target) { 
    const res = [];
    for (let i = 0; i < candidates.length; i++){
        recurshit(candidates,target,i,[],res);
    }
    return res;
};