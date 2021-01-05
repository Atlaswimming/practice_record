/**
 * 124. Binary Tree Maximum Path Sum
 * Given a non-empty binary tree, find the maximum path sum.
 * 
 * For this problem, a path is defined as any node sequence 
 * from some starting node to any node in the tree along the 
 * parent-child connections. The path must contain at least 
 * one node and does not need to go through the root.
 * 
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
 * 
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number}
 */
let maxValue = -Infinity;
var maxPathSum = function(root) {
    let maxValue = -Infinity;
    const findMax = (root) => {
        if (root === null) return 0;
        let valueOfLeftChild = Math.max(0, findMax(root.left));
        let valueOfRightChild = Math.max(0, findMax(root.right));

        maxValue = Math.max(
            maxValue, 
            root.val + valueOfLeftChild + valueOfRightChild,
            );
        return Math.max(valueOfLeftChild, valueOfRightChild) + root.val;
    }
    findMax(root);
    return maxValue;
};
