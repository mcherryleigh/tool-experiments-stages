/**
 * this is MyClass.
 * @desc A class description
 */
module.exports = class MyClass {
  constructor() {
    // airbnb thinks I shouldn't have class methods without calling `this`. Here's a dumb example
    this.counter = 0;
  }

  /**
   * @access public
   * @desc A method description
   * @example
   * console.log('do something')
   * @since 0.0.0
   * @param {number} a - this is a value.
   * @param {number} b - this is a value.
   * @return {number} result of the sum value.
   */
  sum(a, b) {
    this.tempVar += 1;
    return a + b;
  }
};
