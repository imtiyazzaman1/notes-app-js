var assert = {
  isTrue: function (assertToCheck) {
    if (!assertToCheck) {
      throw new Error("Assertion Failed: " + assertToCheck + " is not truthy")
    } else {
      console.log("Assertion Passes: " + assertToCheck + " !");
    }
  }
}
