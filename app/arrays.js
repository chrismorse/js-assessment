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

  },

  prepend: function(arr, item) {

  },

  curtail: function(arr) {

  },

  concat: function(arr1, arr2) {

  },

  insert: function(arr, item, index) {

  },

  count: function(arr, item) {

  },

  duplicates: function(arr) {

  },

  square: function(arr) {

  },

  findAllOccurrences: function(arr, target) {

  }
};
