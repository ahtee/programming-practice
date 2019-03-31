# Linked Lists in Ruby
# Source: https://www.rubyguides.com/2017/08/ruby-linked-list/

# Ruby doesn't support linked lists out of the box, so we will create our own LinkedList class.
# If you are coding using linked lists, it may be best to use a different language unless you are bound to Ruby.
class LinkedList

    # initialize the Linked List
    def initialize
    end

    # allow adding a value to the end of the Linked List
    # Runtime: O(1) for insertion
    def append(value)
        if @head
            find_tail.next = Node.new(value)
        else
            @head = Node.new(value)
        end
    end

    # find the last node in the Linked List
    def find_tail
        node = @head
        while (node = node.next)
            if !node.next
                return node
            end
        end
    end

    # append a value after a specific target
    # Runtime: O(n) for insertion
    def append_after(target, value)
        
    end

    # Search the linked list for a specific value. 
    # Runtime: O(n)
    def find(value)
    end

    # Remove a node from the linked list.
    # Runtime: O(1) for deletion of a node. Remove the pointers and remove the Node contents.
    def delete(value)
    end

    # find the node pointer before the linked list node
    def find_before(value)
    end

    # print the linked list in its entirety.
    def print
    end

end

class Node
    attr_accessor :next
    attr_reader :value

    def initialize(value)
        @value = value
        @next = nil
    end

    def to_s
        puts `Node with value #{value}`
    end
end