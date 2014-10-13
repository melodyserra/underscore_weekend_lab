var myFunctions = {

  // Return an array of the first n elements of an array. If n is undefined,
  // return just the first element.
  first: function(array, n) {
    if(n === undefined) {
      return array[0];
    }
    else if (n > array.length) {
      return array;
    }
    else {
      return array.splice(0,n);
    }
  },

  // Like first, but for the last elements. If n is undefined, return just the
  // last element.
  last: function(array, n) {
    if(n === undefined) {
      return array[array.length-1];
    }
    else if (n > array.length) {
      return array;
    }
    else {
      return array.splice(array.length-n,n);
    }
  },

  // Produce a duplicate-free version of the array.
  uniq: function(array) {
    var uniqueArr = [];
    for(i = 0; i < array.length; i++){
      if(uniqueArr.indexOf(array[i]) === -1 ){
        uniqueArr.push(array[i]);
      }
    }
      return uniqueArr;
  },

  // Takes an array of objects and returns and array of the values of
  // a certain property in it. E.g. take an array of people objects
  // (which have a name and an age) and return an array of just their ages
  pluck: function(array, key) {
    var plucked = [];
    for(i = 0; i < array.length; i++){
      plucked.push(array[i][key]);
      }
      return plucked;

  },

 // Determine if the array contains a given value (using `===`).
 // TIP: There are multiple solutions to this problem, ranging from one line to using reduce();
  contains: function(array, target) {
     if (array.indexOf(target) >= 0) {
      return true;
    } else {
      return false;
    }
  },

  // Turns a multidimensional array into a single array
  // flatten([1,2,[3,4,[5,6]]]) returns [1,2,3,4,5,6]
  // Hint: Use Array.isArray to check if something is an array
  // Also, you will need to use recursion
  // when you find an array inside of an array
  flatten: function(array) {

  }
};
module.exports = myFunctions;
