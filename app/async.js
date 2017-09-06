exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
    return new Promise(resolve => {
      resolve(value);
    });
  },

  manipulateRemoteData: function(url) {

    return {
      then: function(callback) {
        fetch(url)
        .then( resp => resp.json())
        .then( data => {
          names = [];
          data.people.forEach(item => names.push(item.name));
          names.sort();
          
          return callback(names)
        })
      }
    }
  }
};
