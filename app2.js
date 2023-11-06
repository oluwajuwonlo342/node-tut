// npm -- global command comes with node 
// npm -- version 
// locally dependency use it only in this particular project 
// npm i <packageName>
// global dependency - use it in any project
// npm install -g <packageName>
// sudo install -g <packageName>
// package.json - Manifest file(stores important info about the project/package)
// Manual approach (Create package.json in the root, create properties etc )
// npm init (Step by step press enter to skip)
// npm init -y (everything default)
 
const _ = require('lodash')
const items = [1, [2, [3, [4, []]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)