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
var swapPairs = function(head) {
    let cur = head
    if(!head || !head.next) return head
    while(cur && cur.next){
        if(cur.next){
            let temp1 = cur.val
            let temp2 = cur.next.next
            cur.val = cur.next.val
            cur.next.val = temp1
            cur.next.next = temp2
        }
        cur= cur.next.next
    }
    return head
};