class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      // vertex cant be duplicate
      this.adjacencyList[vertex] = [];
      return true;
    }
    return false;
  }

  addEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1);
      return true;
    }
    return false;
  }

  removeEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
        (element) => element !== vertex2
      );
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
        (element) => element !== vertex1
      );
      return true;
    }
    return false;
  }

  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) return undefined;
    while (this.adjacencyList[vertex].length) {
      let temp = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, temp);
    }
    delete this.adjacencyList[vertex];
    return this;
  }
}

const myGraph = new Graph();
console.log(myGraph.addVertex('A'));
console.log(myGraph.addVertex('B'));
console.log(myGraph.addVertex('C'));
console.log(myGraph.addVertex('D'));

// console.log(myGraph.addVertex('a'));
console.log(myGraph.addEdge('A', 'B'));
console.log(myGraph.addEdge('A', 'C'));
console.log(myGraph.addEdge('A', 'D'));
console.log(myGraph.addEdge('B', 'D'));
console.log(myGraph.addEdge('C', 'D'));
// console.log(myGraph.removeEdge('A', 'B'));

// console.log(myGraph.removeEdge('A', 'D'));
myGraph.removeVertex('D');
console.log(myGraph.removeVertex('E'));
console.log(myGraph);
