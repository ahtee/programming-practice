# Queue using stacks

    #  |---|   |    |
    #  |---|   |    |
    #  |---|   |    |
    #  |---|   |    |
    #  _____   ______

    # Properties of queue: First in last out
    # Stack is First In First Out
    # We have two stacks, implement a queue with two stacks
    # Since we want to create a queue, we need to move all stack items 
    # to the second stack, add the new stack item to stack one
    # then re-add the rest of the stackTwo items to stack One. 
    # That way we can imitate a queue

class Queue: 

    def __init__(self);
        self.stackOne = []
        self.stackTwo = []

    def enQueue(self, item):
        # Move all elements from stackOne to stackTwo
        if (len(self.stackOne) != 0):
            self.stackTwo.append(stackOne[-1])
            self.stackOne.pop()
        
        # Push item back into stackOne
        self.stackOne.append(item)

        # Push everything back to stackOne
        while (len(self.stackTwo) != 0):
            self.stackOne.append(stackTwo[-1])
            self.stackTwo.pop()

    def deQueue(self):
        # If the first stack is empty return error message
        if (len(self.stackOne) == 0):
            print "Queue stack is empty"
        
        # Return top of stack one
        nextItem = self.stackOne[-1]
        self.stackOne.pop()
        return nextItem

    def printQueue(self):
        if (len(self.stackOne) == 0):
            print "Queue is empty"
        
        item = len(self.stackOne) - 1
        while (item >= 0):
            print self.stackOne[item]
            item = item - 1
    
