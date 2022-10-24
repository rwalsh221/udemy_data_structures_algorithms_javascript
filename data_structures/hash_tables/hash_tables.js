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
    let index = this._hash(key);
    if (!this.dataMap[index]) {
      this.dataMap[index] = [];
    }
    this.dataMap[index].push([key, value]);
    return this;
  }
  // GET DATA FROM HASH TABLE
  get(key) {
    let index = this._hash(key);
    if (this.dataMap[index]) {
      let value;
      this.dataMap[index].forEach((element) => {
        if (element[0] === key) {
          value = element[1];
        }
      });
      return value;
    }

    return undefined;
  }

  // GET ALL KEYS FROM HASH TABLE
  keys() {
    const keyArray = [];
    this.dataMap.forEach((element) => {
      if (element.length !== 0) {
        element.forEach((element) => {
          keyArray.push(element[0]);
        });
      }
    });
    return keyArray;
  }
}

const myHashTable = new HashTable();
console.log(myHashTable);
console.log(myHashTable.set('lumber', 70));
console.log(myHashTable.set('washers', 50));
console.log(myHashTable.set('bolts', 1400));
console.log(myHashTable.get('bolts'));
console.log(myHashTable.keys());
