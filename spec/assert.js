const describe = (desc, func) => {
  console.log(desc)
  func()
}

function Expect(testValue) {
  this.testValue = testValue
}

  // Expect.prototype.isTrue = function (testName) {
  //   if (this.testValue !== true) {
  //     throw new Error(testName + " Failed: " + testValue + " is not truthy")
  //   } else {
  //     console.log(testName + " Passes!");
  //   }
  // };

  Expect.prototype.toEqual = function (trueValue) {
    if (this.testValue !== trueValue) {
      throw new Error(testName + " Failed: " + testValue + " does not equal " + trueValue)
    } else {
      console.log(testName + " Passes!");
    }
  }

module.exports = Expect
module.exports = describe
