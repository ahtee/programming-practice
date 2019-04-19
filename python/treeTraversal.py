# In order traversal of tree

class Node:

        def __init__(self, value):
                self.value = value
                self.left = None
                self.right = None

        def inOrderTraversal(root):
                if (root):
                        inOrderTraversal(root.left)
                        print root.value
                        inOrderTraversal(root.right)
        
        def preOrderTraversal(root):
                if (root):
                        print root.value 
                        preOrderTraversal(root.left)
                        preOrderTraversal(root.right)

        def postOrderTraversal(root):
                if (root):
                        postOrderTraversal(root.left)
                        postOrderTraversal(root.right)
                        print(root.value)
