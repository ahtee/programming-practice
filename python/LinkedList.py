#!/usr/bin/python

# class LinkedListNode:
#     def __init__(self, value, nextNode=None):
#         self.value = value
#         self.nextNode = nextNode

# node1 = LinkedListNode(1)
# node2 = LinkedListNode(2)
# node3 = LinkedListNode(3)

# node1.nextNode = node2
# node2.nextNode = node3

# class LinkedListNode:
#     def __init__(self, value, nextNode=None):
#         self.value = value
#         self.nextNode = nextNode

# # "3" => "7" => "10"
# node1 = LinkedListNode("3")
# node2 = LinkedListNode("7")
# node3 = LinkedListNode("10")
# node4 = LinkedListNode("77")

# node1.nextNode = node2
# node2.nextNode = node3
# node3.nextNode = node4

# currentNode = node1
# while True:
#     print currentNode.value
#     if currentNode.nextNode == None
#         print "None"
#         break
#     currentNode = currentNode.nextNode

# class LinkedListNode:
#     def __init__(self, value, nextNode=None):
#         self.value = value
#         self.nextNode = nextNode

# class linkedList:
#     def __init__(self, head=None):
#         self.head = head
    
#     def insert(self, value):
#         node = LinkedListNode(value)
#         if self.head == None:
#             self.head = node
#             return

# class Node:
#     def __init__(self, val):
#         'contructor to initiate this object'
#         #store data
#         self.val = val
#         # store reference to next item
#         self.next = None
#         return
    
#     def has_value(self, value):
#         if self.data == value:
#             return True
#         else:
#             return False

    

# node1 = Node(12)
# node2 = Node(99)
# node3 = Node(37)
# node1.next = node2
# node2.next = node3

# class SingleLinkedList:
#     def __init__(self):
#         self.head = None
#         self.tail = None
#         return
    
#     def add_list_item(self, item):
#         if not isinstance(item, ListNode):
#             item = ListNode(item)
#         if self.head is None:
#             self.head = item
#         else:
#             self.tail.next = item
#         self.tail = item
#         return

    
#     def list_length(self):
#         count = 0
#         current_node = self.head

#         while current_node is not None:
#             current_node = current_node.next
#             count += 1

# newList = SingleLinkedList()
# newList.add_list_item(1)

# class Node:
#     def __init__(self, value=None):
#         self.value = value
#         self.nextNode = None
    
# class SingleLinkedList:
#     def __init__(self):
#         self.head = None
    
#     def printList(self):
#         start = self.head
#         while start is not None:
#             print start.value
#             start = start.nextNode
    
#     def unshift(self, value):
#         begValue = Node(value)
#         begValue.nextNode = self.head
#         self.head = begValue
    
#     def append_to_list(self, value):
#         current_node = self.head
#         newNode = Node(value)
#         while current_node.nextNode:
#             current_node = current_node.nextNode
#         current_node.nextNode = newNode

#     def insert_value(self, pos, value):
#         newNode = Node(value)
#         newNode.nextNode = pos.nextNode
#         pos.nextNode = newNode
    
#     def remove_value(self, pos, value):

        


        


# list1 = SingleLinkedList()
# list1.head = Node(1)
# list1.node2 = Node(2)
# list1.node3 = Node(3)
# list1.node4 = Node(4)

# list1.head.nextNode = node2
# list1.node2.nextNode = node3
# list1.node3.nextNode = node4

# list1.unshift(0)
# list1.append_to_list(5)
# list1.insert_value(list.node3.nextNode, 14)
# list1.printList()


class Node:
    def __init__(self, data=None):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = Node()
    
    # append to the list
    def append(self, data):
        newNode = Node(data)
        curr = self.head
        while curr.next is not None:
            curr = curr.next
        curr = newNode
    
    # length of the linked list
    def length(self):
        curr = self.head
        count = 0
        while curr.next:
            count = count + 1
            curr = curr.next
        return count

    def display(self):
        elems = []
        curr = self.head
        while curr is not None:
            curr = curr.next
            elems.append(curr.data)
        print elems
    
    def get(self, index):
        if index >= self.length():
            print "index is greater than length of the list"
            return -1
        curr_index = 0
        curr_node = self.head
        while True:
            curr_node = curr_node.next
            if  curr_index is index:
                return curr_node.data
            curr_index += 1
    
    def delete(self, index):
        curr_index = 0
        curr_node = self.head
        while True:
            last_node = curr_node
            curr_node = curr_node.next
            if curr_index == index:
                last_node.next = curr_node.next
                return
            curr_index += 1

list = LinkedList()
list.display()

list.append(0)
list.append(3)

