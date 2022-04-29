/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function(graph) {
    if (graph.length === 1 || graph.length === 2){
        return true;
    }
    
    const left = new Set(), right = new Set(), visited = [];
    visited.length = graph.length;
    visited.fill(false);
    
    const checkAndLink = (side,index) => {
        visited[index] = true;
        
        for (let i = 0 ; i < graph[index].length; i++){
            if (side == 'L'){
                if (left.has(graph[index][i])) return false;
                right.add(graph[index][i])
            } else {
                if (right.has(graph[index][i])) return false;
                left.add(graph[index][i])
            }
        }
        const temp = side === 'L' ? right.values() : left.values();

        for (const entry of temp){
            if (!visited[entry]){
                let res = checkAndLink(side === 'L' ? 'R' : 'L',entry);
                if (!res) return false;
            }
        }
        return true;
    }
    
    for (let i = 0; i < graph.length; i++){
        if (graph[i].length > 0 && !visited[i]){
            let res = checkAndLink('L',i);
            if (!res) return false;
        }
    }
    return true;
};