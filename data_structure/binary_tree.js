class Node {
    constructor(val, left, right) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}
class Tree {
    constructor(source = []) {
       this.source = source;
       this.root = null;
       return this.create();
    }
    /**
     * source 数组是一棵二叉树的广度优先遍历结果
     * create 方法会将广度优先遍历结果还原成嵌套存储的对象
     */
    create() {
        const l = this.source.length;
        if (l === 0) return null;
        let sourceNodeList = this.source.map(item => item === null ? null : new Node(item));
        
        sourceNodeList.forEach((item,index) => {
            if(item == null) return;
            item.left = sourceNodeList[(index+1) * 2 - 1] || null;
            item.right = sourceNodeList[(index+1) * 2] || null;
        })
        return sourceNodeList[0];
    }
}


/**
 * 124. Binary Tree Maximum Path Sum
 * Given a non-empty binary tree, find the maximum path sum.
 * 
 * For this problem, a path is defined as any node sequence 
 * from some starting node to any node in the tree along the 
 * parent-child connections. The path must contain at least 
 * one node and does not need to go through the root.
 */
 const maxPathSum = function(root) {
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

const test_maxPathSum = () => {
    const case1 = [-10,9,20,null,null,15,7]
    const case1Tree = new Tree(case1)
    console.log(maxPathSum(case1Tree))
}

test_maxPathSum();

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

/**
 * 105. Construct Binary Tree from Preorder and Inorder Traversal
 * Given preorder and inorder traversal of a tree, construct the binary tree.
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {Node}
 */
var buildTree = function(preorder, inorder) {
    const construct = (
        preorder=[], 
        preStart, 
        preEnd, 
        inorder=[], 
        inStart, 
        inEnd) => {
            // console.log(preorder, preStart, preEnd, inorder, inStart, inEnd, "root: ", preorder[preStart])
            if(preStart > preEnd || inStart > inEnd) return null;
            const root = new Node(preorder[preStart]);
            const indexOfRootOfInorder = inorder.indexOf(preorder[preStart]);
            const numOfLeftTree = indexOfRootOfInorder - inStart;
            // console.log(root, indexOfRootOfInorder, numOfLeftTree)
            root.left = construct(
                preorder, 
                preStart + 1, 
                preStart + numOfLeftTree, 
                inorder, 
                inStart, 
                indexOfRootOfInorder - 1
            );
            root.right = construct(
                preorder, 
                preStart + numOfLeftTree + 1, 
                preEnd, 
                inorder, 
                indexOfRootOfInorder + 1, 
                inEnd
            )
            
            return root;
    }
    return construct(preorder, 0, preorder.length - 1, inorder, 0, inorder.length - 1)
};

const test_buildTree = () => {
    const case2_pre = [3,9,20,15,7];
    const case2_in = [9,3,15,20,7];
    console.log(buildTree(case2_pre, case2_in));

    const case3_pre = [1,2,3];
    const case3_in = [3,2,1];
    console.log(buildTree(case3_pre, case3_in))
}

test_buildTree();
