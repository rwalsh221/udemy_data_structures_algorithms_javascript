class HashTable {
  constructor(size = 7) {
    this.dataMap = new Array(size);
  }

  _hash(key) {
    let hash = 0;

    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length;
    }
    return hash;
  }
  // ADD DATA TO HASH TABLE
  set(key, value) {
    const index = this._hash(key);

    if (!this.dataMap[index]) {
      this.dataMap[index] = [];
    }
    this.dataMap[index].push([key, value]);
    return this;
  }
  // GET DATA FROM HASH TABLE
  get(key) {
    const index = this._hash(key);
    let value;
    if (this.dataMap[index]) {
      this.dataMap[index].forEach((el) => {
        if (el[0] === key) {
          value = el[1];
        }
      });
      return value;
    }
    return undefined;
  }

  // GET ALL KEYS FROM HASH TABLE
  keys1() {}

  keys() {
    const keysArray = [];
    this.dataMap.forEach((el) => {
      if (el) {
        el.forEach((el) => {
          keysArray.push(el[0]);
        });
      }
    });
    return keysArray;
  }
}
