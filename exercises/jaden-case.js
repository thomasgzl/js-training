'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */

function jadenCase(str) {
    return str.toLowerCase().split(' ').map(function(word) {
      return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
  }
  return jadenCase('You must write your own tests');

//* Begin of tests
const assert = require('assert')

assert.fail('You must write your own tests')
// End of tests */
