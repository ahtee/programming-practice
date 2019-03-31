# Stack.py

# Last In First Out (LIFO)
# Best case is a web browser history
# [1, 2, 3] press back button and removes last input
# [1, 2]

# browsing_session = []
# browsing_session.append(1)
# print(browsing_session)
# back = browsing_session.pop()
# print(back)
# print(browsing_session)
# print("redirect", browsing_session[-1])
# 0 returns false
# [] returns false
# "" returns false
# browsing_session[-1] item on top of stack

# class createStack:
#     def __init__(self):
#         self.stack = []
    
#     def push(self, value):
#         self.stack.append(value)
    
#     def pop(self):
#         print('Removed last entered item ' + str(self.stack[-1]) + ' successfully.')
#         self.stack.pop()
        
    
#     def printStack(self):
#         print(self.stack)

# st = createStack()
# st.push(1)
# st.push(2)
# st.push(3)
# st.push(4)
# st.push(5)
# st.push(6)
# st.pop()
# st.pop()
# st.printStack()

# stack in a linked list
class Node:
    def __init__(self, data=None):
        self.data = data
        self.next = None
    
class StackLinkedList:
    def __init__(self):
        self.head = Node()
    
    def push(self, data):
        newNode = Node(data)
        newNode.next = self.head
        self.head = newNode
        print("Added new value to stack")
    
    def pop(self):
        popped = self.head.data
        self.head = self.head.next
        print("removed value from stack")
    
    def printStack(self):
        curr = self.head
        while curr.next:
            print(curr.data)
            curr = curr.next

s = StackLinkedList()
s.push(1)
s.push(2)
s.push(3)
s.push(4)
s.push(5)
s.printStack()
s.pop()
s.printStack()