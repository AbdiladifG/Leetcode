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
    let res = new ListNode()
    let pres = res
    let cur = head
    let set = new Set()
    while(cur){
        if(!set.has(cur.val) && cur.next == null || !set.has(cur.val) && cur.next.val != cur.val){
            pres.next = new ListNode(cur.val)
            pres = pres.next
        }
        set.add(cur.val)
        cur = cur.next
    }
    return res.next
};