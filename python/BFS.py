# BFS for a graph practice
# Source: https://www.geeksforgeeks.org/breadth-first-search-or-bfs-for-a-graph/

class Graph:
  def __init__(self):
    self.graph = defaultdict(list)
    
  def addEdge(self, node):
    visited = [False] * (len(self.graph))
    
    queue = [];
    
    queue.append(node)
    visited[node] = True
    
    while queue:
      next = queue.pop(0)
      
      print (next, end + " ")
      
      for (i in self.graph[node]):
        if (visited[i] is False):
          visited[i] = True
          queue.append(i)
