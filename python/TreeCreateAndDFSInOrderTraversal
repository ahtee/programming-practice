# Create a tree and insert new values onto the tree

class Node:
        def __init__(val):
                self.val = val
                self.left = None
                self.right = None

        def insert(self, val):
                if (self.val):
                        if (val < self.val):
                                if (self.left is None):
                                        self.left = Node(val)
                                else:
                                        self.left.insert(val)
                        elif (val > self.val):
                                if (self.right is None):
                                        self.right = Node(val)
                                else:
                                        self.right.insert(val)
                else:
                        self.val = val

        
        # def printInOrderDFS(self):
        #         if (self.data):
        #                 printInOrderDFS(self.left)
        #                 print self.data
        #                 printInOrderDFS(self.left)

        def findVal(self, value):
                if (value < self.val):
                        return self.left.findVal(value)
                elif (value > self.val):
                        return self.right.findVal(value)
                
                        
                

        def printInOrderDFS(self):
                if (self.data):
                        if (self.left):
                                self.left.printInOrderDFS()
                        print self.data
                        if (self.right):
                                self.right.printInOrderDFS()
                else:
                        print "Binary tree doesn't exist in memory."
        
        def printPreOrderDFS(self):
                if (self.data):
                        print self.data
                        if (self.left):
                                self.left.printPreOrderDFS()
                        if (self.right):
                                self.right.printPreOrderDFS()
                else:
                        print "Binary tree doesn't exist in memory."
        
        def printPostOrderDFS(self):
                if (self.data):
                        if (self.left):
                                self.left.printPostOrderDFS()
                        if (self.right):
                                self.right.printPostOrderDFS()
                        print self.data
                else:
                        print "Binary tree doesn't exist in memory."
                        

# Use the insert method to add nodes
root = Node(12)
root.insert(6)
root.insert(14)
root.insert(3)

root.printInOrderDFS()
