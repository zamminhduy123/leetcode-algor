/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
    // Map string to a map of string and double
    const map = new Map();
    for (let i = 0; i < equations.length; i++){
        let temp = map.get(equations[i][0]), newMapValue = [equations[i][1],values[i]];
    
        if (!temp){
            map.set(equations[i][0], [newMapValue]);
        } else {
            map.set(equations[i][0], [...temp, newMapValue]);
        }
        
        let temp_2 = map.get(equations[i][1]), newMapValue_2 = [equations[i][0],(1.0/values[i])];
    
        if (temp_2 == undefined){
            map.set(equations[i][1], [newMapValue_2]);
        } else {
            map.set(equations[i][1], [...temp_2, newMapValue_2]);
        }
    }
    
    const makeVisited = () => {
        const visited = new Map();
        for (const [start,end] of queries){
            visited.set(start,false);
            visited.set(end,false);
        }
        return visited;
    }

    const dfs = (start,end,visited) => {
        const mapValue = map.get(start);
        if (!mapValue) return -1;
        
        visited.set(start,true);
        
        let res;
        for (const [newStart,value] of mapValue){
            if (newStart == end) return value;
            if (visited.get(newStart) != true) {
                res = dfs(newStart,end,visited);
                if (res != -1) return res *value;
            }
        }
        return -1;
    }
    
    const res = [];
    
    for (const [start,end] of queries){
        const visited = makeVisited();
        res.push(dfs(start,end,visited));
    }
    
    return res;
};