/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    if (n === 0 || head === null){
        return head;
    }
    else{
        //find n from end
        let possible = head;
        let node = head;
        let count = 0;
        while (node.next !== null){
            if (count === n){
                possible = possible.next;
            }
            else {
                count ++;
            }
            node = node.next;
        }

        //remove node
        if (count < n){
            return head.next;
        }
        else{
            possible.next = possible.next.next;
            return head;
        }
    }
    
};