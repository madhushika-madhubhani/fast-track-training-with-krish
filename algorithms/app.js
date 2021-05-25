const SortLib = require('@euriklis/sortlib')
const array = [6,5,3,21,1]
const output = SortLib.selection_sort(array)
const reversed_output = SortLib.selection_sort(array, false)

console.log(output)
console.log(reversed_output)
