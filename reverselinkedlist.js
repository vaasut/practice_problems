/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if (head === null || head.next === null){
        return head;
    }
    else{
        let next = head.next
        let prev = head;
        while (next.next !== null){
            temp = next.next;
            next.next = prev;
            prev = next;
            next = temp;
        }
        next.next = prev;
        head.next = null;
        return next;
    }
};