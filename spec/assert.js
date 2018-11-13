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
        console.log('pass');
        return true
      } else {
        console.log('fail');
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
