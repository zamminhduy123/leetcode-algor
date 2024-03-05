/**
 * @param {number[]} tokens
 * @param {number} power
 * @return {number}
 */

//sort and play the game as it should be
var bagOfTokensScore = function(tokens, power) {
    if (tokens.length == 1) {
        return power > tokens[0] ? 1 : 0;
    }

    tokens.sort(function(a, b) {
        return a - b;
    });
    let l = 0, r = tokens.length - 1, score = 0, moved = false, maxS = 0;

    while(1) {
        moved = false;
        if (power >= tokens[l]) {
            score++;
            if (score > maxS) maxS = score;
            power -= tokens[l++];
            moved = true;
        } else if (score > 0) {
            score--;
            power+=tokens[r--];
            moved = true;
        } else break;
        console.log(power, moved, score)

        if (l > r) break;
        if (!moved) break;
    }
    return maxS;
};