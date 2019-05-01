// ES6 Graph implementation.
// Note: you may need to use a modern browser (Chrome) to run this Javascript
// Node and Babel may also work

// Source for below https://hackernoon.com/the-javascript-developers-guide-to-graphs-and-detecting-cycles-in-them-96f4f619d563
// There are two main ways to represent a graph: with an Adjacency List, 
// which is a collection of arrays
// associated with each node:
```
{
a: [b,c,d],
b: [c,f],
d: [e],
e: [a,f],
f: [a, c, d, e]
}
```
// or with an Adjacency Matrix, which is a two-dimensional array where edges 
// between vertices are represented with a 1:
```
[ [0, 1, 0, 0, 0, 0, 1, 0, 1, 0],
  [1, 0, 0, 0, 1, 0, 1, 0, 0, 1],
  [0, 0, 0, 0, 1, 0, 1, 0, 0, 0],
  [0, 0, 0, 0, 1, 1, 0, 0, 1, 0],
  [0, 1, 1, 1, 0, 1, 0, 0, 0, 1],
  [0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
  [1, 0, 0, 1, 0, 0, 0, 1, 0, 0],
  [0, 1, 0, 0, 1, 0, 0, 1, 0, 0] ]
```

// Make a graph!

function Graph() {
        this.adjList = new Object();
}

Graph.prototype.addVertex = function(v) {
        this.adjList[v] = [];
}

Graph.prototype.addEdge = function(v1, v2) {
        
        this.adjList[v1].push(v2);
}

Graph.prototype.dfs = function() {
        const nodes = Object.keys(this.adjList);
        const visited = {};
        for (let i = 0; i < nodes.length; i++) {
                const node = nodes[i];
                this._dfsUtil(node, visited);
        }
}

Graph.prototype._dfsUtil = function(vertex, visitedObj) {
        if (!visitedObj[vertex]) {
                visitedObj[vertex] = true;
                console.log(vertex, visitedObj);
                
                const neighbors = this.adjList[vertex];

                for (let i = 0; i < neighbors.length; i++) {
                        const neighbor = neighbors[i];
                        this._dfsUtil(neighbor, visitedObj);
                }
        }
}

Graph.prototype.detectCycle = function() {
        const graphNodes = Object.keys(this.adjList);
        const visited = {};
        const recStack = {};

        for (let i = 0; i < graphNodes; i++) {
                const node = graphNodes[i];

                if (this._detectCycleUtil(node, visited, recStack)) {
                        return ('there is a cycle');
                }
        }
        return 'no cycle!';
}

Graph.prototype._detectCycleUtil = function(vertex, visited, recStack) {
        if (!visited[vertex]) {
                visited[vertex] = true;
                recStack[vertex] = true;
                
                const nodeNeighbors = this.adjList[vertex];
                for (let i = 0; i < nodeNeighbors.length; i++) {
                        const currentNode = nodeNeighbors[i];
                        
                        if (!visited[currentNode] && this._detectCycleUtil(currentNode, visited, recStack)) {
                                return true;
                        }
                        else if (recStack[currentNode]) {
                                return true;
                        }
                }
        }
        recStack[vertex] = false;
        return false;
}

const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');

graph.addEdge('A', 'B');
graph.addEdge('B', 'C');


// source: https://www.geeksforgeeks.org/implementation-graph-javascript/
class Graph {
        constructor(vertices) {
                this.vertices = vertices;
                this.adjList = new Map();
        }

        // add vertex to the graph
        const addVertex = (vertex) => {
                this.adjList.set(v, []);
        };

        // add edge to the graph
        // In order to add edge we get the adjacency list of the corresponding src vertex and add the dest to the adjacency list.
        const addEdge = (vertex, edge) => {
                // get the list for vertex vertex and put the 
                // vertex line denoting edge betweeen vertex and line 
                this.adjList.get(vertex).push(edge);

                // Since graph is undirected, 
                // add an edge from w to v also 
                this.AdjList.get(w).push(v); 
        };

        const printGraph = () => {
                let get_keys = this.adjList.keys();

                for (let i of get_keys) {
                        let get_values = this.adjList.get(i);
                        let concat = "";

                        for (let j of get_values) {
                                concat += j + " ";
                        }
                }
                console.log(`${i} -> ${concat}`);
        };

        const bfs = (startNode) => {
                let visited = new Array();
                
                for (let i = 0; i < this.vertices; i++) {
                        visited[i] = false;
                }

                let q = new Queue();

                visited[startNode] = true;
                q.enqueue(startNode);

                while (!q.isEmpty()) {
                        let getQueueElement = q.dequeue();
                        console.log(getQueueElement);

                        let get_list = this.adjList.get(getQueueElement);

                        for (let i in get_list) {
                                let neighbor = get_list[i];

                                if (!visited[neighbor]) {
                                        visited[neighbor] = true;
                                        q.enqueue(neightbor);
                                }
                        }
                }
        };

        const dfs = (startNode) => {
                let visited = new Array();
                
                for (let i = 0; i < this.vertices; i++) {
                        visited[i] = false;
                }
                
                this.DFSUtil(startNode, visited);
        };

        // Recursive function which process and explore 
        // all the adjacent vertex of the vertex with which it is called 
        function DFSUtil(v, visited) {
                visited[v] = true;
                console.log(v);

                let get_neighbors = this.adjList.get(v);

                for (let i in get_neighbors) {
                        let get_element = get_neighbors[i];

                        if (!visited[get_element]) {
                                this.DFSUtil(get_element, visited);
                        }
                }
        }
}
