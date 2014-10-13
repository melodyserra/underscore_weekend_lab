## Weekend Lab Part 2 - Implement Underscore.js Methods

For the second part of your long weekend lab, we'd like you to rewrite some underscore.js methods and tests that make them pass. The functions you will be implementing are:

1. First -  [http://underscorejs.org/#first](http://underscorejs.org/#first)

_.first(array, [n]) Alias: head, take 
Returns the first element of an array. Passing n will return the first n elements of the array.

_.first([5, 4, 3, 2, 1]);
=> 5

2. Last - [http://underscorejs.org/#last](http://underscorejs.org/#last)

last_.last(array, [n]) 
Returns the last element of an array. Passing n will return the last n elements of the array.

_.last([5, 4, 3, 2, 1]);
=> 1

3. Uniq - [http://underscorejs.org/#uniq](http://underscorejs.org/#uniq)

_.uniq(array, [isSorted], [iteratee]) Alias: unique 

uniq_.uniq(array, [isSorted], [iteratee]) Alias: unique 
Produces a duplicate-free version of the array, using === to test object equality. If you know in advance that the array is sorted, passing true for isSorted will run a much faster algorithm. If you want to compute unique items based on a transformation, pass an iteratee function.

_.uniq([1, 2, 1, 3, 1, 4]);
=> [1, 2, 3, 4]

4. Pluck - [http://underscorejs.org/#pluck](http://underscorejs.org/#pluck)

_.pluck(list, propertyName) 

A convenient version of what is perhaps the most common use-case for map: extracting a list of property values.

var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
_.pluck(stooges, 'name');
=> ["moe", "larry", "curly"]

5. Contains - [http://underscorejs.org/#contains](http://underscorejs.org/#contains)

_.contains(list, value) 

Returns true if the value is present in the list. Uses indexOf internally, if list is an Array.

_.contains([1, 2, 3], 3);
=> true

### How to tackle this assignment

0. Fork and Clone the repo and then run npm install to make sure you pull in Chai.
1. First, start with some research, make sure you know exactly what these five functions do before you try to implement them on your own.
2. The "describe" and "it" blocks have been written for you, so start by writing the appropriate tests that match what is inside the "it" block.
3. Once your tests are written, try to write a function that makes the test pass.

### Bonus

Implement the function flatten  - [http://underscorejs.org/#flatten](http://underscorejs.org/#flatten) - you will need to use recursion to solve this.

### Final note

Not only is reimplementing JavaScript functions a fantastic way to improve your JS and TDD skills - it's also a super super common interview question, so the more you can practice earlier the better. This is going to be challenging, but if you get stuck, move to the next function or use each other and Stack Overflow to help. We will review everything after the long weekend, so if you are struggling, don't get discouraged!
