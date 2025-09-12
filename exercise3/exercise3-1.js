/**
 * Write a function(s) that checks the level 
 * of nesting of an array. 
 * Then, use that function to flatten the array 
 * into a single-dimensional array.
 */

function levelOfNestingArray(arr) {
    if(!Array.isArray(arr)) return 0

    return 1 + Math.max(0, ...arr.map(levelOfNestingArray))
}