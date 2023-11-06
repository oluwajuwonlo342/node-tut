const {readFileSync, writeFileSync} = require('fs');
console.log('start')
const first = readFileSync('./contents/subfolder/first.txt','utf8');
const second = readFileSync('./contents/subfolder/second.txt','utf8');

writeFileSync(
    './contents/result-sync.txt',
    `Here is the result : ${first}, ${second}`, {flag:'a'}
)
console.log('Done with this task ')
console.log('Starting the next one')