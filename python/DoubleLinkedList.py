class Node:
    def __init__(self, nxt=None, prev=None, data=None):
        self.data = data
        self.next = nxt
        self.prev = prev

class DoubleLinkedList:
    def __init__(self):
        self.head = Node()
    
    def append(self, data):
        curr_node = self.head
        newNode = Node(data)
        while curr_node.next:
            curr_node = curr_node.next
        curr_node.nxt = newNode
        newNode.prev = curr_node

    def display(self):
        curr_node = self.head
        arr = []
        while curr_node.next:
            arr.append(curr_node.data)
        return arr



obj = DoubleLinkedList()
obj.append(1)
obj.display()