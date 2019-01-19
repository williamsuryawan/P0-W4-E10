function changeMe(arr) {
  // you can only write your code here!
  var result =""
  if (arr=="") {
    // result = "\"\""
    return result
  } else {
  var object ={}
  for (var i=0; i<arr.length; i++){
    var firstInput = arr[i][0]
    var lastInput = arr[i][1]
    var genderInput = arr[i][2]
    var ageInput = arr[i][3]

    if (object[firstInput] === undefined) {
      object[firstInput] = {
        firstName: firstInput,
        lastName: lastInput,
        gender: genderInput,
        age: ageInput
      }
      if (object[firstInput].age === undefined) {
        object[firstInput].age = "Invalid Birth Year"
      }
    }
    console.log(i+1+ ". "+ arr[i][0]+ " "+ arr[i][1]+":")
    console.log(object[firstInput])
  }
  }
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""