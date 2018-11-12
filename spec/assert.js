function describe(desc, func) {
  console.log(desc)
  func()
}

function it(message, func) {
  describe(" " + message, func)
}

function Expect(testValue) {
  this.testValue = testValue
}

Expect.prototype.toBeAnInstanceOf = function (testClass) {
  if (!(this.testValue instanceof testClass)) {
    throw new Error(" Failed: " + this.testValue + " is not a " + testClass )
  }
};

Expect.prototype.toEqual = function (trueValue) {
  if (this.testValue !== trueValue) {
    throw new Error(" Failed: " + this.testValue + " does not equal " + trueValue)
  }
}

module.exports = {
  Expect,
  describe,
  it
}
