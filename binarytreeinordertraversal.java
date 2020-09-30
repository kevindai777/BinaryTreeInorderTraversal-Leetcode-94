//Java Solution

class Solution {
    public List<Integer> inorderTraversal(TreeNode root) {
        TreeNode curr = root;
        Stack<TreeNode> stack = new Stack<>();
        List<Integer> result = new ArrayList<>();
        
        while (curr != null || !stack.isEmpty()) {
            while (curr != null) {
                stack.push(curr);
                curr = curr.left;
            }
            
            curr = stack.pop();
            result.add(curr.val);
            curr = curr.right;
        }
        
        return result;
    }
}