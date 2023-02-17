// add / get / get all key

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

  add(key, value) {
    let index = this._hash(key);

    if (!this.dataMap[index]) {
      this.dataMap[index] = [];
    }

    this.dataMap[index].push([key, value]);

    return this;
  }

  get(key) {
    let index = this._hash(key);

    if (this.dataMap[index]) {
      let value;
      this.dataMap[index].forEach((el) => {
        if (el[0] === key) {
          value = el[1];
        }
      });
      return value;
    }
    return false;
  }

  keys() {
    const keysArray = [];

    this.dataMap.forEach((el) => {
      el.forEach((el) => {
        keysArray.push(el[0]);
      });
    });

    return keysArray;
  }
}
