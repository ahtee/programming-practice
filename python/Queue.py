# Queue.py
# FIFO First In First Out
# 
# class Queue:
#     def __init__(self):
#         self.items = []

#     def isEmpty(self):
#         return len(self.items) == 0
    
#     def pop(self):
#         self.items.pop()

#     def push(self, item):
#         self.items.insert(0, item)
    
#     def printqueue(self):
#         print self.items

# q = Queue()
# q.push(1)
# q.push(2)
# q.push(3)
# q.push(4)
# q.printqueue()
# q.pop()
# q.printqueue()

class Node:
    def __init__(self, data=None):
        self.data = data
        self.next = None

class LinkedListQueue:
    def __init__(self):
        self.head = Node()

    def push(self, value):
        newNode = Node(value)
        nextNode = self.head
        self.head = newNode
        self.head.next = nextNode
        print("Added new value to Queue")
    
    def pop(self):
        curr = self.head
        while curr.next:
            prev = curr
            curr = curr.next
        prev.next = None
        print("Removed item from Queue")
        
    
    def printQueue(self):
        curr = self.head
        while curr.next:
            print(curr.data)
            curr = curr.next
        

q = LinkedListQueue()
q.push(1)
q.push(2)
q.push(3)
q.push(4)
q.push(5)
q.printQueue()
q.pop()
q.printQueue()
