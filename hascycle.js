/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {

    let current = head;
    while (current !== null){
        if (current.val === 103134){ //some unique value
            return true;
        }
        current.val = 103134;
        current = current.next;
    }
    return false;
};