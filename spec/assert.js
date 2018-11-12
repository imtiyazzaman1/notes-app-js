var assert = {
  isTrue: function (testName, assertToCheck) {
    if (!assertToCheck) {
      throw new Error("Assertion Failed: " + testName + " is not truthy")
    } else {
      console.log("Assertion Passes: " + testName + "!");
    }
  }
}

module.exports = assert
