// addV, addE, removeV,removeE
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (this.adjacencyList[vertex]) {
      return;
    }
    this.adjacencyList[vertex] = [];
    return this;
  }

  addEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1 && this.adjacencyList[vertex2]]) {
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1);
      return true;
    }
    return false;
  }

  removeEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
        (vertex) => vertex !== vertex2
      );
      this.adjacencyList[vertex2] = this.adjacencyList.vertex2.filter(
        (vertex) => vertex !== vertex1
      );
      return true;
    }
    return false;
  }

  removeVertex(vertex) {
    if (this.adjacencyList[vertex]) {
      this.adjacencyList[vertex].forEach((el) => {
        this.removeEdge(el, vertex);
      });
      delete this.adjacencyList[vertex];
      return true;
    }
    return false;
  }
}
