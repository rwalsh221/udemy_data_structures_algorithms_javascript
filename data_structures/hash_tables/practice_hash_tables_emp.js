// set / get / get all key
class HashTable {
  constructor(size = 7) {
    this.dataMap = new Array(size);
  }

  _hash(key) {
    let index = 0;

    for (let i = 0; i < key.length; i++) {
      index = (index + key.charCodeAt(i) * 23) % this.dataMap.length;
    }
    return index;
  }

  set(key, value) {
    const index = this._hash(key);

    if (!this.dataMap[index]) {
      this.dataMap[index] = [];
    }

    this.dataMap[index].push([key, value]);
    return this;
  }

  get(key) {
    const index = this._hash(key);
    console.log(this.dataMap[index]);
    let value;

    if (this.dataMap[index]) {
      this.dataMap[index].forEach((el) => {
        console.log(el);
        if (el[0] === key) {
          value = el[1];
        }
      });
      return value;
    }
    return undefined;
  }

  keys() {
    const keyArray = [];

    this.dataMap.forEach((el) => el.forEach((el) => keyArray.push(el[0])));
    return keyArray;
  }
}

const newHashTable = new HashTable();

newHashTable.set('bolts', 7);
newHashTable.set('bolts', 20);
newHashTable.set('nails', 7);
newHashTable.set('hammers', 7);
console.log(newHashTable);
console.log(newHashTable.dataMap);
console.log(newHashTable.get('boltss'));
console.log(newHashTable.keys());
