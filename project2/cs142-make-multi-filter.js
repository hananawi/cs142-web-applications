"use strict";

/**
 * @template T
 * @param {T[]} originalArray
 */
function cs142MakeMultiFilter(originalArray) {
  let currentArray = originalArray;
  /**
   * @param {(element: T) => boolean} [filterCriteria]
   * @param {(this: typeof originalArray, currentArray: typeof originalArray) => void} [callback]
   */
  return function arrayFilterer(filterCriteria, callback) {
    if (typeof filterCriteria !== "function") {
      return currentArray;
    }
    currentArray = currentArray.filter(filterCriteria);
    if (callback) {
      callback.call(originalArray, currentArray);
    }
    return arrayFilterer;
  };
}
