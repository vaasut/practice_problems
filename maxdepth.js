/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if (root === null){
        return 0;
    }
    else{
        let leftDepth = maxDepth(root.left);
        let rightDepth = maxDepth(root.right);
        if (leftDepth > rightDepth){
            return 1 + leftDepth;
        }
        
        return 1 + rightDepth;
    }
};