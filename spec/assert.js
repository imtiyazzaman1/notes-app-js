var assert = {
  isTrue: function (testName, testValue) {
    if (testValue !== true) {
      throw new Error(testName + " Failed: " + testValue + " is not truthy")
    } else {
      console.log(testName + " Passes!");
    }
  },
  equals: function (testName, testValue, trueValue) {
    if (testValue !== trueValue) {
      throw new Error(testName + " Failed: " + testValue + " does not equal " + trueValue)
    } else {
      console.log(testName + " Passes!");
    }
  }
}

module.exports = assert
