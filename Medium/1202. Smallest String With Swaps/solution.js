/**
 * @param {string} s
 * @param {number[][]} pairs
 * @return {string}
 */
var smallestStringWithSwaps = function(s, pairs) {
    const ajdList = [];
    ajdList.length = s.length;
    ajdList.fill([])
    for (let i = 0 ; i < pairs.length; i++){
        if (pairs[i][0] != pairs[i][1]){
            ajdList[pairs[i][0]] = [...ajdList[pairs[i][0]], pairs[i][1]]
            ajdList[pairs[i][1]] = [...ajdList[pairs[i][1]], pairs[i][0]]
        }
    }
    
    const internalLink = [];
    const check = [];
    check.length = s.length;
    check.fill(false);
    
    let index = 0;
    const makeInternalLink = (id) => {
        for (let i = 0 ; i < ajdList[id].length; i++) {
            if (!check[ajdList[id][i]]){
                check[ajdList[id][i]] = true;
                internalLink[index].push(parseInt(ajdList[id][i]));
                makeInternalLink(ajdList[id][i]);
            }
        }
    }
    
    for (let i = 0; i < ajdList.length;i++){
        if (!check[i]){
            check[i] = true;
            internalLink[index] = [parseInt(i)];
            makeInternalLink(i);
            index++;
        }
    }

    const strArr = Array.from(s);
    
    for (let i = 0 ; i < internalLink.length; i++){
        internalLink[i].sort((a,b) => a - b);
        let temp = [];
        for (let j = 0 ; j < internalLink[i].length; j++){
            temp.push(strArr[internalLink[i][j]]);
        }
        temp.sort();
        let k = 0;
        for (let j = 0 ; j < internalLink[i].length; j++){
            strArr[internalLink[i][j]] = temp[k++];
        }
    }
    return strArr.join('');
};