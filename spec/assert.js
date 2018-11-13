function describe(desc, func) {
  console.log(desc)
  func()
}

function it(message, func) {
  describe(" " + message, func)
}

function expect(exp, matcher) {
  return Matchers(exp)
}

function Matchers(exp) {
  return matchers = {
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


module.exports = {
  expect,
  describe,
  it,
  Matchers
}
