/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let fast = head
    let slow = head
    
    while(fast && fast.next){
        slow = slow.next
        fast = fast.next.next
    }

    let prev = null;
    while(slow){
        let temp = slow.next
        slow.next = prev
        prev = slow
        slow = temp
    }
    
    while (prev) { 
        if (head.val !== prev.val) {
            return false;
        }
        head = head.next;
        prev = prev.next;
    }
    return true
};