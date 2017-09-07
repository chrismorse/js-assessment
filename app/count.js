exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {

    let timeout;

    const logIt = () => {
      console.log(start++);

      if (start <= end) {
        timeout = setTimeout(logIt, 100);
      }
    }

    logIt();

    return {
      cancel: function () {
        clearTimeout(timeout)
      }
    }

  }
};
