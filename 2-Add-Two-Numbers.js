/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let l = new ListNode()
    let cur = l
    let carry = 0
    while (l1 || l2) {
        while (l1 && l2) {
            let add = l1.val += l2.val + carry
            carry = 0
            if (add >= 10) {
                add = add - 10
                carry += 1
            }
            cur.next = new ListNode(add)
            cur = cur.next
            l1 = l1.next
            l2 = l2.next
        }
        while (l1) {
            let add = l1.val + carry
            carry = 0
            if (add >= 10) {
                add = add - 10
                carry += 1
            }
            cur.next = new ListNode(add)
            cur = cur.next
            l1 = l1.next
        }
        while (l2) {
            let add = l2.val + carry
            carry = 0
            if (add >= 10) {
                add = add - 10
                carry += 1
            }
            cur.next = new ListNode(add)
            cur = cur.next
            l2 = l2.next
        }
        
    }
    if(carry){
        cur.next = new ListNode(carry)
        cur = cur.next
    }
    return l.next
};