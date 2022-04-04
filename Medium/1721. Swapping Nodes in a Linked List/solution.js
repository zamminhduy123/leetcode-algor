/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function(head, k) {
    let cur = head,
        count = 1, kEnd = head;
    
    //find k from end
    while (cur.next != null){
        if (count === k){
            kEnd = kEnd.next;
        } else {
            count++;
        }
        cur = cur.next;
    }
    
    //find k from top
    let kTop = head;
    count = 1;
    while(kTop!=null){
        if (count === k){
            //swap
            let temp = kTop.val;
            kTop.val = kEnd.val;
            kEnd.val = temp;
            break;
        }
        else{
            kTop = kTop.next;
        }
        count++;
    }
    return head
    
};