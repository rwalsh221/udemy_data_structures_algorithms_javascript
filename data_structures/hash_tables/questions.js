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

  // HT: Item In Common
  itemInCommon(arr1, arr2) {
    const compareObj = {};
    arr1.forEach((el) => (compareObj[el] = true));
    let itemInCommon = false;
    arr2.forEach((el) => {
      if (compareObj[el]) {
        itemInCommon = true;
      }
    });
    return itemInCommon;
  }

  // HT: First Non-Repeating Character
  firstNonRepeatingCharacter(string) {
    let result = null;
    const charObj = {};
    for (let i = 0; i < string.length; i++) {
      if (charObj[string[i]]) {
        charObj[string[i]] = false;
      } else {
        charObj[string[i]] = true;
      }
    }
    for (let i = 0; i < string.length; i++) {
      if (charObj[string[i]] === true) {
        result = string[i];
        return result;
      }
    }
  }
}

const newHashTable = new HashTable();
console.log(newHashTable.itemInCommon([1, 2, 3], [4, 5, 6]));
console.log(newHashTable.firstNonRepeatingCharacter('aabbcde'));
