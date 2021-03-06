/* ======================== CallBacks Practice ============================ */
const each = (elements, cb) => {
  // Iterates over a list of elements, yielding each in turn to the `cb` function.
  // This only needs to work with arrays.
  for (let i = 0; i < elements.length; i++){
    cb(elements[i], i)
  }
}

const map = (elements, cb) => {
  // Produces a new array of values by mapping each value in list through a transformation function (iteratee).
  // Return the new array.
  let newArr = [];
  for (let i = 0; i < elements.length; i++){
    newArr.push(cb(elements[i]));
  }
  return newArr;
};

/* ======================== Closure Practice ============================ */
const limitFunctionCallCount = (cb, n) => {
  // Should return a function that invokes `cb`.
  // The returned function should only allow `cb` to be invoked `n` times.
  let count = 0;
  return (...args) => {
    if (count >= n){
      return null;
    }
    count++;
    return cb(...args);
  }
};

const cacheFunction = cb => {
  // Should return a funciton that invokes `cb`.
  // A cache (object) should be kept in closure scope.
  // The cache should keep track of all arguments have been used to invoke this function.
  // If the returned function is invoked with arguments that it has already seen
  // then it should return the cached result and not invoke `cb` again.
  // `cb` should only ever be invoked once for a given set of arguments.
  let cache = {};
  return (...args) => {
    const key = args;
    if (key in cache){
      return cache.key;
    }
    cache[key] = cb(key);
    return cache[key];
  }
};

/* eslint-enable no-unused-vars */

/* ======================== Recursion Practice ============================ */
const reverseStr = str => {
  // reverse str takes in a string and returns that string in reversed order
  // The only difference between the way you've solved this before and now is that you need to do it recursivley!
  if (str.length === 0) {
    return "";
  }
  return str[str.length - 1] + reverseStr(str.substring(0, str.length - 1));
};

const checkMatchingLeaves = obj => {
  // return true if every property on `obj` is the same
  // otherwise return false
  let tester;
  let flag = true;
  const checkLeaves = (object) => {
    Object.keys(object).forEach((elem) => {
      if (tester === undefined && typeof elem !== 'object'){
        tester = object[elem]
      }
      if (typeof object[elem] === 'object'){
        return checkLeaves(object[elem]);
      }
      if (object[elem] !== tester){
        flag = false;
      }
    });
  };
  checkLeaves(obj);
  return flag;
};

const flatten = elements => {
  // Flattens a nested array (the nesting can be to any depth).
  // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];
  let resultArr = [];
  elements.forEach((elem) => {
    if (Array.isArray(elem)){
      resultArr = resultArr.concat(flatten(elem));
    } else {
      resultArr.push(elem);
    }
  })
  return resultArr;
};

module.exports = {
  each,
  map,
  limitFunctionCallCount,
  cacheFunction,
  reverseStr,
  checkMatchingLeaves,
  flatten,
};
