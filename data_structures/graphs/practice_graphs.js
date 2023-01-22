class Graph {
  constructor() {
    this.adajencyList = {};
  }

  addVertex(vertex) {
    if (!this.adajencyList[vertex]) {
      this.adajencyList[vertex] = [];
      return true;
    }
    return false;
  }

  addEdge(vertex1, vertex2) {
    if (this.adajencyList[vertex1] && this.adajencyList[vertex2]) {
      this.adajencyList[vertex1].push(vertex2);
      this.adajencyList[vertex2].push(vertex1);
      return true;
    }
    return false;
  }

  removeEdge(vertex1, vertex2) {
    if (this.adajencyList[vertex1] && this.adajencyList[vertex2]) {
      this.adajencyList[vertex1] = this.adajencyList[vertex1].filter(
        (vertex) => vertex != vertex2
      );
      this.adajencyList[vertex2] = this.adajencyList[vertex2] = filter(
        (vertex) => vertex !== vertex1
      );
      return true;
    }
    return false;
  }

  removeVertex(vertex) {
    if (this.adajencyList[vertex]) {
      this.adajencyList[vertex].forEach((el) => this.removeEdge(vertex, el));
      delete this.adajencyList[vertex];
      return true;
    }
    return false;
  }

  removeVertex2(vertex) {}
}
