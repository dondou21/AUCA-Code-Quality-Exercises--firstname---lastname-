/**
 * Implement a JavaScript function to find 
 * the sum of all elements in an array recursively.
 */

function sumOfArrayRecursive(arr) {
    if(arr.length === 0) return 0

    return arr[0] + sumOfArrayRecursive(arr.slice(1))
}