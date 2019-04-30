class Node:
  def __init__(self, val):
    self.val = val
    self.left = None
    self.right = None
  
  def insert(self, data):
    
    # If new data is less than the current node we recursively try to insert into, insert into the left most node
    if self.data:
      if data < self.data:
        if self.left is None:
          self.left = new Node(data)
        else:
          self.left.insert(data)
      elif data > self.data:
        if self.right is None:
          self.right = new Node(data)
        else:
          self.right.insert(data)
      else:
        self.data = data

  def PrintTree(self):
    if self.left:
      PrintTree(self.left)
    print self.data
    if self.right:
      PrintTree(self.right)
      
  def ArrayToTree(self, arr):
    for (i in arr):
      insert(i)
    PrintTree()
