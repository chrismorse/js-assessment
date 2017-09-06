exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.findIndex(val => item === val)
  },

  sum: function(arr) {
    return arr.reduce((acc, curr)  => acc + curr)
  },

  remove: function(arr, item) {
    return arr.filter(val => val !== item)
  },

  removeWithoutCopy: function(arr, item) {
    while (arr.indexOf(item) > 0) {
      arr.splice(arr.indexOf(item),1);
    }
    return arr;
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    sum = 0;
    arr.forEach(arrItem => {
      if (arrItem === item)
        sum++
    });
    return sum;
  },

  duplicates: function(arr) {

    var notDups = new Set();
    var dups = new Set();

    for (let i = 0; i < arr.length; i++) {
      thisVal = arr[i];
      if (notDups.has(thisVal))
        dups.add(thisVal)
      else
        notDups.add(thisVal);
    }
    return [...dups];
  },

  square: function(arr) {
    return arr.map(item => item * item)
  },

  findAllOccurrences: function(arr, target) {
    index = [];
    arr.forEach((item, i) => {
      if (target === item)
        index.push(i);
    });

    return index;
  }
};
