# binary tree: data struct in which each node has at most two children
# which are referred to as the left child and right child.
# Top node is the root
# leaves are the bottom nodes of the tree with no children
# root starts at 0 or 1
# depth is the measure of the height from the root to the node
# height is leaves back to root
# Complete binary tree : every level except the last is completely filled
    # all nodes in the last level are as far left as possible
# Full binary tree: every node has either 0 or 2 children

# define the node class like you did in linked list

# these are all depth-first search

class Node:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

class BinaryTree(obj):
    def __init__(self, root):
        self.root = Node(root)

    def print_tree(self, trav_type):
        if trav_type == "preorder":
            return self.preorder_print(tree.root, "")
        elif trav_type == "inorder":
            return self.inorder_print(tree.root, "")

    def preorder_print(self, start, trav):
        # Root -> Left -> Right
        if start:
            trav += (str(start.value) + "-")
            trav = self.preorder_print(start.left, trav)
            trav = self.preorder_print(start.right, trav)
        return trav

    def inorder_print(self, start, trav):
        # Left -> root -> right
        if start:
            trav = self.inorder_print(start.left, trav)
            trav += (str(start.value) + "-")
            trav = self.inorder_print(start.right, trav)
        return trav

    def postorder_print(self, start, trav):
        # Left -> right -> root
        if start:
            trav = self.postorder_print(start.left, trav)
            trav = self.postorder_print(start.right, trav)
            trav += (str(start.value) + "-")
        return trav

#     1
#    /  \
#   2    3
#  / \
# 4   5
binTree = BinaryTree(1)
binTree.root.left = Node(2)
binTree.root.right = Node(3)
binTree.root.left.left = Node(4)
binTree.root.left.right = Node(5)

# pre order traversal: check current node (root) is empty
# root, left subtree, right subtree
