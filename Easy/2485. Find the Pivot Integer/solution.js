/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function(n) {
    let arr = new Array(n).fill(0);
    arr[0] = 1;
    for (let i = 1; i < n; i++) {
        arr[i] = (i+1)+arr[i-1];
    }

    let i = 0;
    while (i < n) {
        if (arr[n-1] - arr[i] == arr[i] - (i+1)) {
            return i+1;
        }
        i++;
    }
    return -1;
};

// sum of the x -> n will be the sum from 0 -> n minus the sum from 0 -> x-1