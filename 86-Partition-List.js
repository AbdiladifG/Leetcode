/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    let end = new ListNode()
    let pend = end

    let start = new ListNode()
    let pstart = start

    let cur = head

    while(cur){
        if(cur.val >= x){
            pend.next = new ListNode(cur.val)
            pend = pend.next

        }
        else{
            pstart.next = new ListNode(cur.val)
            pstart = pstart.next
        }
        cur = cur.next
    }
    pstart = start
    while(pstart.next){
        pstart = pstart.next
    }
    pstart.next = end.next
    return start.next
};