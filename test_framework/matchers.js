(function (exports) {
  function matchers(exp) {
    return {
      toEqual: function (assertion) {
        if (exp === assertion) {
          return true
        } else {
          console.log('FAIL ^');
          return false
        }
      },
      toBeAnInstanceOf: function (instance) {
        if (exp instanceof instance) {
          return true
        } else {
          console.log('FAIL ^');
          return false
        }
      }
    }
  }
  exports.matchers = matchers
})(this)
