# Breadth first traversal of a binary tree
# Geeksforgeeks

class Node:
        def __init__(self, value):
                self.value = value
                self.left = None
                self.right = None
        
def printBFS(root):
        h = height(root)
        for i in range(1, h+1):
                printLevel(root, h+1)

def printLevel(root, level):
        if (root is None):
                return
        if (level == 1):
                print root.data
        elif (level > 1):
                printLevel(root.left, level - 1)
                printLevel(root.right, level - 1)

def height(node):
        if (node is None):
                return 0
        else: 
                leftHeight = height(node.left)
                rightHeight = height(node.right)

                if (leftHeight > rightHeight):
                        return leftHeight + 1
                else:
                        return rightHeight + 1
