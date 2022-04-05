/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let prev = head, cur = head;
    while (cur !== null){
        if (cur.val === prev.val){
            let temp = cur;
            cur = cur.next;
            delete temp;
        } else {
            prev.next = cur;
            prev = prev.next;
            cur = cur.next;
        }
    }
    if (prev != cur)
        prev.next = cur;
    return head;
};