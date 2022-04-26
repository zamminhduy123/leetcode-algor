/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {    
    let min, res = new ListNode(), cur = res;
    while (1) {
        let index = -1;
        min = Number.MAX_VALUE;
        for (let i = 0 ; i < lists.length; i++){
            if (lists[i] && lists[i].val < min) {
                min = lists[i].val;
                index = i;
            }
        }
        if (index === -1){
            break;
        }
        lists[index] = lists[index].next;
        cur.next = new ListNode(min);
        cur = cur.next;
    }
    return res.next;
};